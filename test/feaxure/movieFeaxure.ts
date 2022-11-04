import { IMovieState } from "../../src/interfaces"

export const initialState = {
    genre: '',
    title: '',
    maxResults: 10,
    movies: []
}

export const moviesState: IMovieState = {
    genre: 'Action',
    title: 'Batman',
    maxResults: 10,
    movies: [
        {
            id: '1',
            title: 'Batman Begins',
            date: '2005-06-10',
            description: 'asdasd',
            gender: ['Action'],
            poster: 'https://image.tmdb.org/t/p/w500/1P69sKcVgIqgX7W6X9ZnqW0d8tj.jpg',
            isFavorite: false
        },
    ]
}