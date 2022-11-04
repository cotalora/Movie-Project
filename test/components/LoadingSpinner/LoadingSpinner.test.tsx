
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../../../src/components/LoadingSpinner/LoadingSpinner';


describe('Pruebas al componente LoadingSpinner', () => {

    beforeEach(() => {
        render(<LoadingSpinner isLoading={true} />);
    });

    test('Se debe presentar el Spinner', () => {
        expect(screen.getByLabelText('spinnerLoading')).toBeInTheDocument();
    });
})