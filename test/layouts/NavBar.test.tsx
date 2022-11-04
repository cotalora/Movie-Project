import { render, screen } from "@testing-library/react";
import { NavBar } from '../../src/layouts/NavBar/NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas al componente NavBar', () => {

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
                <NavBar
                    window={undefined}
                    routes={routes}
                >
                    <h1>Test</h1>
                </NavBar>
            </MemoryRouter>
        )
    });

    test('Se debe presentar el componente hijo dentro del componente NavBar', () => {
        expect(screen.getByText('Test')).toBeInTheDocument();
    })
})