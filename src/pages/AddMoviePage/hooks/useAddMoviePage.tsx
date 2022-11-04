import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { v4 as uuidv4 } from 'uuid';
import { getMoviesGenres } from "../../../store/slices/movieGenre";

export const useAddMoviePage = () => {

    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    const addMovie = () => {
        if (title && description && poster) {
            const newMovies = JSON.parse(localStorage.getItem('newMovies') || '[]');
            const newMovie = {
                id: uuidv4(),
                genres: ['etv-movies'],
                title,
                description,
                date: new Date().toString(),
                poster,
                isFavorite: false
            }
            localStorage.setItem('newMovies', JSON.stringify([...newMovies, newMovie]));
            setTitle('');
            setDescription('');
            setPoster('');
            setOpenDialog(true);
        }
    }

    const handleClose = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        dispatch(getMoviesGenres());
    }, []);

    return {
        title,
        setTitle,
        description,
        setDescription,
        poster,
        setPoster,
        openDialog,
        handleClose,
        handleSubmit,
        addMovie
    }
}
