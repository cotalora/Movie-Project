export interface NavBarProps {
    children: React.ReactNode;
    window?: () => Window;
    routes: Router[]
}

interface Router {
    path: string; 
    name: string; 
    element: () => JSX.Element;
}
