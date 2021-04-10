import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    addNote: {

        position: 'sticky',
        bottom: '10px',
        right: '10px',
        float: 'right'

    },
    plusIcon: {
        margin: '0',
        textAlign: 'center',
        padding: '0 10px 0 10px',
        fontSize: '4rem',
        width: 'fit-content',
        hight: 'fit-content',
        backgroundColor: '#d6cd1a',
        borderRadius: '50%',

        '&:hover': {
            backgroundColor: '#b0a80c',
        }
    },
    dialogBox: {
        color: '#FFFF99',
    }
})
interface Props {

}

const AddNote: React.FC = (props: Props) => {

    const [open, setOpen] = useState<true | false>(false)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className={classes.addNote}>
            {/* on click opens dialog box */}
            <Button className={classes.plusIcon} onClick={handleOpen}>➕</Button>
            <Dialog open={open} >
                <DialogTitle>Add New Note</DialogTitle>
                <DialogContent >
                    <DialogContentText>Ovde ide nesto ne znam sta</DialogContentText>

                    <TextField label='note title' />
                    <TextField label='tags' />
                    <TextField label='description' />
                </DialogContent>

                <DialogActions>
                    <Button>Edit</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>

            </Dialog>

        </div>
    )
}

export default AddNote
