import { useHomeMoviesPage } from './hooks/useHomeMoviesPage';
import { Filters } from './components/Filters/Filters';
import { MovieCardsContainer } from '../../components/MovieCardsContainer/MovieCardsContainer';
import { Box } from '@mui/material';
import styles from './HomeMoviesPage.module.scss';

export const HomeMoviesPage = () => {

    const { genres, movies, deleteMovieById, getFilter, selectAsFavorite } = useHomeMoviesPage();

    return (
        <Box className={styles.mainContainer}>
            <Box>
                <Filters genres={genres} setFilters={getFilter} />
            </Box>
            <MovieCardsContainer 
                movies={movies} 
                selectAsFavorite={selectAsFavorite}
                deleteMovie={deleteMovieById}
            />
        </Box>
    )
}
