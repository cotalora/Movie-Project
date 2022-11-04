import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardActionArea, Fade } from '@mui/material';
import style from './MovieCard.module.scss';
import { MovieCardProps } from './interfaces/MovieCardProps';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export const MovieCard = ({ id, url, title, date, isFavorite, selectAsFavorite, deleteMovie, isFavoritesPage }: MovieCardProps) => {
    return (
        <Fade in={true}>
            <Card aria-label='movie-card' className={style.customCard}>
                <CardActionArea disableRipple>
                    <Link to={`/movie?movie=${id}`}>
                        <CardMedia
                            className={style.cardMedia}
                            component="img"
                            image={url}
                            alt={title}
                        />
                    </Link>
                </CardActionArea>
                <CardContent className={style.cardContent}>
                    <Typography className={style.cardTitle} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography className={style.cardDate} variant="h5">
                        {date.toLocaleDateString()}
                    </Typography>
                </CardContent>
                {
                    !isFavoritesPage &&
                    <CardActions className={style.cardActions} disableSpacing>
                        <IconButton aria-label='button-favorite' onClick={() => {
                            selectAsFavorite && selectAsFavorite({
                                id: id,
                                title: title,
                                date: date.toString(),
                                description: '',
                                poster: url,
                                isFavorite: isFavorite,
                                gender: []
                            }, !isFavorite)
                        }}>
                            <FavoriteIcon className={isFavorite ? style.favoriteIconSelected : style.favoriteIcon} />
                        </IconButton>
                        <IconButton aria-label='button-delete' onClick={() => { deleteMovie && deleteMovie(id) }}>
                            <DeleteIcon className={style.deleteIcon} />
                        </IconButton>
                    </CardActions>
                }
            </Card>
        </Fade>
    )
}
