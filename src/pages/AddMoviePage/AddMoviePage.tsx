import { useAddMoviePage } from './hooks/useAddMoviePage';
import { Box, TextField, Button } from '@mui/material';
import { DialogAlert } from './components/DialogAlert/DialogAlert';
import style from './AddMoviePage.module.scss';

export const AddMoviePage = () => {

    const { 
        addMovie, 
        handleClose, 
        handleSubmit, 
        openDialog,
        poster,
        setPoster,
        title,
        setTitle,
        description,
        setDescription
    } = useAddMoviePage();

    return (
        <Box className={style.movieContainer}>
            <form onSubmit={handleSubmit} className={style.movieDialog}>
                <TextField
                    label="Title" variant="outlined"
                    name='title' required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    label="Description" variant="outlined"
                    name='description' required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <TextField
                    label="URL Poster" variant="outlined"
                    name='url' required
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)}
                />
                <Button type='submit' variant='contained' onClick={addMovie}>Add movie</Button>
            </form>
            <DialogAlert openDialog={openDialog} handleClose={handleClose} />
        </Box>
    )
}
