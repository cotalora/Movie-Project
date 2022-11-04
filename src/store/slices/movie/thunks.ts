import { setMovies, selectAsFavorite, addMovies } from "./movieSlice";
import { Dispatch } from '@reduxjs/toolkit';
import { getMovies } from "../../../api/movieApi";
import { IResponse } from "./interfaces/response";
import { IMovie } from "../../../interfaces";
import { setLoading, unsetLoading } from "../spinnerLoading/spinnerLoadingSlice";

export const getMoviesByPage = (title: string = '', maxResults: number = 10, genre: string = 'etv-movies') => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    const { response = [] } = await getMovies(title, maxResults, genre);
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    const deletedMovies = JSON.parse(localStorage.getItem('deletedMovies') || '[]');
    const newMovies = JSON.parse(localStorage.getItem('newMovies') || '[]') as IMovie[];
    
    const movies = response.map((movie: IResponse) => {
        return {
            id: movie.id,
            genres: movie.genres,
            title: movie.title,
            description: movie.description,
            date: movie.createdAt,
            poster: movie.poster.url,
            isFavorite: favoriteMovies.find((favoriteMovie: IMovie) => favoriteMovie.id === movie.id) ? true : false,
        }
    }).filter((movie: IMovie) => !deletedMovies.includes(movie.id)) as IMovie[];



    response && dispatch(setMovies({ title, maxResults, genre, movies: [...movies, ...newMovies] })) && dispatch(unsetLoading());
}

export const selectAsFavoriteMovie = (movie: IMovie, isFavorite: boolean) => async (dispatch: Dispatch) => {
    dispatch(selectAsFavorite({ id: movie.id, isFavorite: isFavorite }));
    const favoriteMovies =  JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    isFavorite && 
        localStorage.setItem('favoriteMovies', JSON.stringify([...favoriteMovies, movie]));
    
    !isFavorite &&
        localStorage.setItem('favoriteMovies', JSON.stringify([...favoriteMovies].filter((localMovie: IMovie) => localMovie.id !== movie.id)));
}

export const addMoviesToState = (movies: IMovie[]) => async (dispatch: Dispatch) => {
    dispatch(addMovies(movies));
};