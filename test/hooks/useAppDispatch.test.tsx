import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAppDispatch } from '../../src/hooks/useAppDispatch';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from '../../src/store/slices/movie';
import { movieGenreSlice } from '../../src/store/slices/movieGenre/movieGenreSlice';
import { spinnerLoadingSlice } from '../../src/store/slices/spinnerLoading/spinnerLoadingSlice';

describe('Pruebas unitarias a hook useAppDispatch', () => {

    const store = configureStore({
        reducer: {
            loadingSpinner: spinnerLoadingSlice.reducer,
        },
    });

    test('Se debe llamar la función dispatch resultante del hook', () => {
        const { result } = renderHook(() => useAppDispatch(), {
            wrapper: ({ children }: any) => <Provider store={store}>{children}</Provider>,
        });
        expect(result.current).toHaveBeenCalled;
    })
})