import { IMovie } from '../../../interfaces/rootState';

export interface MovieCardProps {
    id: string;
    url: string;
    title: string;
    date: Date;
    isFavorite: boolean;
    isFavoritesPage?: boolean;
    selectAsFavorite?: (movie: IMovie, isFavorite: boolean) => void;
    deleteMovie?: (id: string) => void;
}