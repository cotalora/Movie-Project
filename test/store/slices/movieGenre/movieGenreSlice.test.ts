import { genresState, initialState } from "../../../feaxure/movieGenreFeaxure";
import { movieGenreSlice, setMovieGenres } from '../../../../src/store/slices/movieGenre/movieGenreSlice';

describe('Pruebas a movieGenreSlice', () => {
    test('Se debe de regresar el estado inicial y llamarse "movieGenre"', () => {
        const state = movieGenreSlice.reducer(initialState, {
            type: 'movieGenre'
        });

        expect(state).toEqual(initialState);
        expect(movieGenreSlice.name).toBe('movieGenre');
    });

    test('Se debe de obtener los géneros', () => {
        const state = movieGenreSlice.reducer(initialState, setMovieGenres(genresState));
        expect(state).toEqual(genresState);
    });
});