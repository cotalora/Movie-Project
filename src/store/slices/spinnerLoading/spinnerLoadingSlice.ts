import { createSlice } from "@reduxjs/toolkit";

export const spinnerLoadingSlice = createSlice({
    name: 'loadingSpinner',
    initialState: { isLoading: false },
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        unsetLoading: (state) => {
            state.isLoading = false;
        }
    },
})

export const { setLoading, unsetLoading } = spinnerLoadingSlice.actions;