import { Box, Typography } from '@mui/material';
import { useMoviePage } from './hooks/useMoviePage';
import style from './MoviePage.module.scss';

export const MoviePage = () => {

    const { movie } = useMoviePage();

    return (
        <Box className={style.movieContainer}>
            <Box className={style.movieDialog}>
                {
                    movie ?
                        <>
                            <Box className={style.dialogHeader}>
                                <Typography className={style.movieTitle}>{movie?.title}</Typography>
                                <Typography className={style.movieDate}>
                                    {movie?.date ? new Date(movie?.date).toLocaleDateString() : ''}
                                </Typography>
                            </Box>
                            <Box className={style.dialogContent}>
                                <img src={movie?.poster} alt={movie?.title} />
                            </Box>
                            <Box className={style.dialogFooter}>
                                <Typography>{movie?.description}</Typography>
                            </Box>
                        </>
                        :
                        <Typography>Movie not found</Typography>
                }
            </Box>
        </Box>
    )
}
