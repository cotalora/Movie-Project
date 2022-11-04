import { render, screen } from '@testing-library/react';
import { CustomDrawer } from '../../../src/layouts/NavBar/components/CustomDrawer/CustomDrawer';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas a componente CustomDrawer', () => {

    const routes = [
        {
            name: 'Home',
            path: '/',
            element: () => <h1>Home</h1>
        },
        {
            name: 'About',
            path: '/about',
            element: () => <h1>About</h1>
        },
        {
            name: 'Contact',
            path: '/contact',
            element: () => <h1>Contact</h1>
        },
    ]

    beforeEach(() => {
        render(
            <MemoryRouter>
                <CustomDrawer routes={routes} />
            </MemoryRouter>
        )
    });

    test('Debe de tres elementos en la lista de rutas', () => {
        expect(screen.getAllByLabelText('router-list').length).toEqual(3);
    });
})