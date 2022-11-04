import { IMovieGenre } from '../../../../../interfaces/rootState';

export interface FiltersProps {
    genres: IMovieGenre[],
    setFilters: (genre: string, title: string, maxResults: number) => void,
}