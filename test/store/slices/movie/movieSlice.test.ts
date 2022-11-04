import { addMovies, deleteMovie, movieSlice, selectAsFavorite, setMovies } from '../../../../src/store/slices/movie/movieSlice';
import { initialState, moviesState } from '../../../feaxure/movieFeaxure';

describe('Pruebas a movieSlice', () => {
    test('Se debe de regresar el estado inicial y llamarse "movie"', () => {
        const state = movieSlice.reducer(initialState, {
            type: 'movie'
        });

        expect(state).toEqual(initialState);
        expect(movieSlice.name).toBe('movie');
    });

    test('Se debe obtener las películas', () => {
        const state = movieSlice.reducer(initialState, setMovies(moviesState));
        expect(state).toEqual(moviesState);
    });

    test('Se debe seleccionar una película como favorita', () => {
        const state = movieSlice.reducer(moviesState, selectAsFavorite({ id: 1, isFavorite: true }));
        expect(state).toEqual(moviesState);
    });

    test('Se debe borrar una película', () => {
        const state = movieSlice.reducer(moviesState, deleteMovie({ id: 1 }));
        expect(state).toEqual(moviesState);
    });

    test('Se debe de añadir una película', () => {
        const state = movieSlice.reducer(moviesState, addMovies(moviesState.movies));
        expect(state).toEqual(moviesState);
    });
});