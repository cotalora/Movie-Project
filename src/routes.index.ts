import { AddMoviePage, FavoritesPage, HomeMoviesPage, MoviePage } from "./pages";

export const arrayRoutes = [
    {
        path: "/",
        name: "Home",
        element: HomeMoviesPage
    },
    {
        path: "/movie",
        name: "",
        element: MoviePage
    },
    {
        path: "/favorites",
        name: "Favorites Movies",
        element: FavoritesPage
    },
    {
        path: "/add",
        name: "Add movie",
        element: AddMoviePage
    }
]