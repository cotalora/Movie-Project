import { Dispatch } from "@reduxjs/toolkit";
import { getMovieGenres } from "../../../api/movieApi";
import { IResponse } from "./interfaces/response";
import { setMovieGenres } from "./movieGenreSlice";

export const getMoviesGenres = () => async (dispatch: Dispatch) => {
    const { response = [] } = await getMovieGenres();
    
    const genres = response.map((genre: IResponse) => {
        return {
            id: genre.id,
            name: genre.name,
            slug: genre.slug
        }
    });

    response && dispatch(setMovieGenres({ genres }));
}