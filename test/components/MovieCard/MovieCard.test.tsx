import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieCard } from '../../../src/components/MovieCard/MovieCard';

describe('Pruebas al componente MovieCard', () => {

    const movieMock = {
        id: '2asd2123awda',
        url: 'https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        title: 'Spiderman',
        date: new Date('2021-03-19'),
        isFavorite: false,
        selectAsFavorite: jest.fn(),
        deleteMovie: jest.fn(),
        isFavoritesPage: false
    }

    beforeEach(() => {
        render(
            <MemoryRouter>
                <MovieCard
                    id={movieMock.id}
                    url={movieMock.url}
                    title={movieMock.title}
                    date={movieMock.date}
                    isFavorite={movieMock.isFavorite}
                    selectAsFavorite={movieMock.selectAsFavorite}
                    deleteMovie={movieMock.deleteMovie}
                    isFavoritesPage={movieMock.isFavoritesPage}
                />
            </MemoryRouter>
        );
    });

    test('Se debe presentar los valores en el documento', () => {
        expect(screen.getByText(movieMock.title)).toBeInTheDocument();
        expect(screen.getByText(movieMock.date.toLocaleDateString())).toBeInTheDocument();
        expect(screen.getByAltText(movieMock.title)).toBeInTheDocument();
    });

    test('Se debe llamar el método selectAsFavorite cuando presione el botón favorito', () => {
        const buttonFavorite = screen.getByLabelText('button-favorite');
        fireEvent.click(buttonFavorite);
        expect(movieMock.selectAsFavorite).toHaveBeenCalled();
    });

    test('Se debe llamar el método deleteMovie cuando presione el botón borrar', () => {
        const buttonDelete = screen.getByLabelText('button-delete');
        fireEvent.click(buttonDelete);
        expect(movieMock.deleteMovie).toHaveBeenCalled();
    });
})