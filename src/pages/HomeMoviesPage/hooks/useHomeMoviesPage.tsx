import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { IMovie, IRootState } from "../../../interfaces";
import { deleteMovie, getMoviesByPage, selectAsFavoriteMovie } from "../../../store/slices/movie";
import { getMoviesGenres } from "../../../store/slices/movieGenre";

export const useHomeMoviesPage = () => {
    
    const dispatch = useAppDispatch();

    const { movies } = useSelector((state: IRootState) => state.movie);
    const { genres } = useSelector((state: IRootState) => state.genre);

    const getFilter = (genre: string, title: string, results: number) => {
        dispatch(getMoviesByPage(title, results, genre));
    }

    const selectAsFavorite = (movie: IMovie, isFavorite: boolean) => {
        dispatch(selectAsFavoriteMovie(movie, isFavorite));
    }

    const deleteMovieById = (id: string) => {
        const deletedMovies =  JSON.parse(localStorage.getItem('deletedMovies') || '[]');
        localStorage.setItem('deletedMovies', JSON.stringify([...deletedMovies, id]));

        dispatch(deleteMovie(id));
    }

    useEffect(() => {
        dispatch(getMoviesGenres());
        dispatch(getMoviesByPage());
    }, []);

    return {
        movies,
        genres,
        getFilter,
        selectAsFavorite,
        deleteMovieById
    }
}
