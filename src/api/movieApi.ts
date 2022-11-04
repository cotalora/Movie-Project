import axios from 'axios';

const movieApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getMovies = async (title: string, max_results: number, genre: string) => {
    const { data } = await movieApi.get('/search', {
        params: {
            term: title,
            max_results: max_results,
            genre: genre
        }
    });
    return data;
}

export const getMovieGenres = async () => {
    const { data } = await movieApi.get('/genres');
    return data;
}