import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { IMovie, IRootState } from "../../../interfaces";

export const useMoviePage = () => {
    const [searchParams] = useSearchParams();

    const { movies } = useSelector((state: IRootState) => state.movie);
    const [movie, setMovie] = useState<IMovie | undefined>(undefined);

    useEffect(() => {
        movies.length > 0 &&
            setMovie(movies.find((movie: IMovie) => movie.id === searchParams.get('movie')));

        movies.length === 0 && setMovie(JSON.parse(localStorage.getItem('movieSelected') || '{}'));
    }, [searchParams]);

    useEffect(() => {
        movie && localStorage.setItem('movieSelected', JSON.stringify(movie));
    }, [movie]);

    return {
        movie
    }
}
