import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { DialogAlertProps } from "./interfaces/DialogAlertProps"

export const DialogAlert = ({ openDialog, handleClose }: DialogAlertProps) => {
    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Movie added"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    The movie has been added
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}
