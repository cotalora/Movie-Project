import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, Box, Button, InputLabel, MenuItem, FormControl } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { FiltersProps } from './interfaces/FiltersProps';
import style from './Filters.module.scss';
import Grow from '@mui/material/Grow';

export const Filters = ({ genres, setFilters }: FiltersProps) => {
    const [currentGenre, setCurrentGenre] = useState('etv-movies');
    const [currentTitle, setCurrentTitle] = useState('');
    const [maxResults, setMaxResults] = useState(10);

    const handleChangeGenre = (event: SelectChangeEvent) => {
        setCurrentGenre(event.target.value);
    };

    const handleChangeMaxResults = (event: SelectChangeEvent) => {
        setMaxResults(parseInt(event.target.value));
    };

    const handleChangeTitle = (value: string) => {
        setCurrentTitle(value);
    };

    const handleSearch = () => {
        setFilters(currentGenre, currentTitle, maxResults);
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <Grow in={true}>
            <form className={style.filterContainer} onSubmit={handleSubmit}>
                <FormControl className={style.genreFilter}>
                    <InputLabel id="demo-select-small">Genre</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={currentGenre}
                        label="Genre"
                        onChange={handleChangeGenre}
                        name="genre"
                    >
                        {
                            genres.map(({ id, name, slug }) => (
                                <MenuItem key={id} value={slug}>{name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-required"
                    className={style.titleFilter}
                    label="Title"
                    name="tirle"
                    onChange={(event) => handleChangeTitle(event.target.value)}
                />
                <FormControl className={style.maxResultFilter}>
                    <InputLabel id="demo-select-small">Max Results</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={maxResults.toString()}
                        label="Max Results"
                        onChange={handleChangeMaxResults}
                        name="maxResults"
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' className={style.buttonSubmit} onClick={handleSearch}>Filter</Button>
            </form>
        </Grow>
    )
}
