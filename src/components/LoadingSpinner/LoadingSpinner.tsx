
import { Fade, Box, CircularProgress } from '@mui/material';
import { LoadingSpinnerProps } from './interfaces/LoadingSpinnerProps';
import style from './LoadingSpinner.module.scss';

export const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
    return (
        <>
        {
            isLoading && 
            <Fade in={true}>
                <Box className={style.spinner}><CircularProgress aria-label='spinnerLoading' /></Box>
            </Fade>
        }
        </>
    )
}