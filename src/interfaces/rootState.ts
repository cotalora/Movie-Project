export interface IRootState {
    movie: IMovieState;
    genre: IMovieGenreState;
    loadingSpinner: ISpinnerLoadingState;
}

export interface IMovieState {
    genre: string;
    title: string;
    maxResults: number;
    movies: IMovie[];
}

export interface IMovie {
    id: string;
    title: string;
    date: string;
    gender: string[];
    poster: string;
    isFavorite: boolean;
    description: string;
}

export interface IMovieGenreState {
    genres: IMovieGenre[];
}

export interface IMovieGenre {
    id: number;
    name: string;
    slug: string;
}

export interface ISpinnerLoadingState {
    isLoading: boolean;
}