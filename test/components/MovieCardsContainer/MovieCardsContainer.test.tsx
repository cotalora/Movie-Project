import { fireEvent, render, screen } from "@testing-library/react";
import { MovieCardsContainer } from '../../../src/components/MovieCardsContainer/MovieCardsContainer';
import { IMovie } from '../../../src/interfaces/rootState';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas al componente MovieCardsContainer', () => {

    const mockMovies: IMovie[] = [
        {
            id: '2asd2123awda',
            title: 'Spiderman',
            date: '2021-03-19',
            gender: ['Action', 'Adventure', 'Fantasy'],
            poster: 'https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            isFavorite: false,
            description: 'asdasd'
        },
        
        {
            id: '2asd2123awdaaa',
            title: 'Spiderman II',
            date: '2021-03-19',
            gender: ['Action', 'Adventure', 'Fantasy'],
            poster: 'https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            isFavorite: false,
            description: 'asdasASDASD II d'
        }
    ];
    const mockSelectAsFavorite = jest.fn();
    const mockDeleteMovie = jest.fn();

    beforeEach(() => {
        render(
            <MemoryRouter>
                <MovieCardsContainer
                    movies={mockMovies}
                    selectAsFavorite={mockSelectAsFavorite}
                    deleteMovie={mockDeleteMovie}
                    isFavoritesPage={false}
                />
            </MemoryRouter>
        )
    });

    test('Se debe presentar dos componentes MovieCard', () => {
        expect(screen.getAllByLabelText('movie-card').length).toEqual(2);
    });

    test('Se debe llamar el método selectAsFavorite de la primera card cuando presione el botón favorito', () => {
        const buttonFavorite = screen.getAllByLabelText('button-favorite')[0];
        fireEvent.click(buttonFavorite);
        expect(mockSelectAsFavorite).toHaveBeenCalled();
    });

    test('Se debe llamar el método deleteMovie de la primera card cuando presione el botón borrar', () => {
        const buttonDelete = screen.getAllByLabelText('button-delete')[0];
        fireEvent.click(buttonDelete);
        expect(mockDeleteMovie).toHaveBeenCalled();
    });
});