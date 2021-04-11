import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    something: {
        background: 'telow'
    }
});

interface Props {
open: boolean,
handleOpen: () => void,
handleClose: () => void,

}

const AddNoteDialog = (props: Props) => {
    const classes = useStyles({
        dialogBox: {
            color: '#FFFF99',
        }
    })
    return (
        <div>
            <Dialog open={props.open} >
                <DialogTitle>Add New Note</DialogTitle>
                <DialogContent >
                    <DialogContentText>Ovde ide nesto ne znam sta</DialogContentText>

                    <TextField label='note title' />
                    <TextField label='tags' />
                    <TextField label='description' />
                </DialogContent>

                <DialogActions>
                    <Button>Edit</Button>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>

            </Dialog>

        </div>
    )
}

export default AddNoteDialog
