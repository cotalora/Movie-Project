export interface CustomDrawerProps {
    routes: Router[]
}

interface Router {
    path: string; 
    name: string; 
    element: () => JSX.Element;
}
