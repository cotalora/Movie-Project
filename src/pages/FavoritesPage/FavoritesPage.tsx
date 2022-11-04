import { Box } from '@mui/material';
import { MovieCardsContainer } from "../../components/MovieCardsContainer/MovieCardsContainer";
import style from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');

    return (
        <>
            {
                favorites.length > 0 ?
                <MovieCardsContainer isFavoritesPage={true} movies={favorites} /> :
                <Box className={style.nothingFound}>
                    <img src="/Movie-Project/norecord.png" alt="Not found" />
                    <h4>Nothing found</h4>
                </Box>
            }
        </>
    )
}
