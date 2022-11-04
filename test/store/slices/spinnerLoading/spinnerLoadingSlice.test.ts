import { setLoading, spinnerLoadingSlice } from '../../../../src/store/slices/spinnerLoading/spinnerLoadingSlice';
import { initialState, isLoading, isNotLoading } from '../../../feaxure/spinnerLoadingFeaxure';

describe('Pruebas a spinnerLoadingSlice', () => {

    test('Se debe de regresar el estado inicial y llamarse "loadingSpinner"', () => {
        const state = spinnerLoadingSlice.reducer(initialState, {
            type: 'loadingSpinner'
        });

        expect(state).toEqual(initialState);
        expect(spinnerLoadingSlice.name).toBe('loadingSpinner');
    });

    test('Se debe de realizar la visualización del spinner', () => {
        const state = spinnerLoadingSlice.reducer(initialState, setLoading());
        expect(state).toEqual(isLoading);
    });

    test('Se debe de ocultar el spinner', () => {
        const state = spinnerLoadingSlice.reducer(initialState, setLoading());
        expect(state).toEqual(isNotLoading);
    });
})