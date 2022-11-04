import { createSlice } from "@reduxjs/toolkit";
import { IMovieState } from "../../../interfaces";

const initialState: IMovieState = {
    genre: '',
    title: '',
    maxResults: 10,
    movies: []
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setMovies: (state, { payload }) => {
            state.genre = payload.genre;
            state.title = payload.title;
            state.maxResults = payload.maxResults;
            state.movies = payload.movies;
        },
        selectAsFavorite: (state, { payload }) => {
            const movie = state.movies.find(movie => movie.id === payload.id);
            if (movie) 
                movie.isFavorite = payload.isFavorite;
        },
        deleteMovie: (state, { payload }) => {
            const movies = state.movies.filter(movie => movie.id !== payload);
            
            state.movies = movies;
        },
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
})

export const { setMovies, selectAsFavorite, deleteMovie, addMovies } = movieSlice.actions;