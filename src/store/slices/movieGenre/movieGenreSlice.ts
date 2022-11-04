import { createSlice } from "@reduxjs/toolkit";
import { IMovieGenreState } from "../../../interfaces";

const initialState: IMovieGenreState = {
    genres: []
};

export const movieGenreSlice = createSlice({
    name: 'movieGenre',
    initialState: initialState,
    reducers: {
        setMovieGenres: (state, { payload }) => {
            state.genres = payload.genres;
        }
    },
})

export const { setMovieGenres } = movieGenreSlice.actions;