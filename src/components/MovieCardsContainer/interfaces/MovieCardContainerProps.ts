import { IMovie } from "../../../interfaces";

export interface MovieCardContainerProps {
    movies: IMovie[],
    isFavoritesPage?: boolean;
    selectAsFavorite?: (movie: IMovie, isFavorite: boolean) => void,
    deleteMovie?: (id: string) => void
}