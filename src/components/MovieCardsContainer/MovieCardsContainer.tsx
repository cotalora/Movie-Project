import { MovieCard } from "../MovieCard/MovieCard";
import style from './MovieCardsContainer.module.scss';
import Box from '@mui/material/Box';
import { MovieCardContainerProps } from "./interfaces/MovieCardContainerProps";

export const MovieCardsContainer = ({ movies, isFavoritesPage, selectAsFavorite, deleteMovie }: MovieCardContainerProps) => {

    return (
        <>
        <Box className={style.cardContainer}>
            {
                movies.map(({ id, title, gender, poster, date, isFavorite }) => (
                    <MovieCard 
                        key={id} 
                        id={id}
                        url={poster}
                        title={title}
                        date={new Date(date)}
                        isFavorite={isFavorite}
                        selectAsFavorite={selectAsFavorite}
                        deleteMovie={deleteMovie}
                        isFavoritesPage={isFavoritesPage}
                    />
                ))
            }
        </Box>
        </>
    )
}
