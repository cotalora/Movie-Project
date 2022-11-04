import { configureStore } from '@reduxjs/toolkit';
import { movieGenreSlice, movieSlice, spinnerLoadingSlice } from './slices'

export const store = configureStore({
    reducer: {
        loadingSpinner: spinnerLoadingSlice.reducer,
        movie: movieSlice.reducer,
        genre: movieGenreSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;