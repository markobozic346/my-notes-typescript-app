import React, { useState, ChangeEvent } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({

    inputFields: {
        maxWidth: '600px',
        minWidth: '300px',
        margin: '0 10px 0 10px',
        borderColor: '#FFFF99',
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#d6cd1a',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#d6cd1a',
            },
            '&:hover fieldset': {
                borderColor: '#d6cd1a',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#d6cd1a',
            },
        }
    },
    dialogCenterContent: {
        textAlign: 'center',
    }
});

interface Props {
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void,

}

const AddNoteDialog = (props: Props) => {
    //states
    const [title, setTitle] = useState<String>('');
    const [tags, setTags] = useState<String>('');
    const [description, setDescription] = useState<String>('');


    // handle input functions
    const handleTitleChange = (value: String) => {
        setTitle(value);
    }

    const handleTagsChange = (value: String) => {
        setTags(value);
    }

    const handleDescriptionChange = (value: String) => {
        setDescription(value)
    }
    const classes = useStyles()
    return (
        <div>
            <Dialog open={props.open} >
                <DialogTitle className={classes.dialogCenterContent}>Add New Note</DialogTitle>
                <DialogContent className={classes.dialogCenterContent} >
                    <DialogContentText>Fill fields with details</DialogContentText>

                    <TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { handleTitleChange(e.target.value) }} className={classes.inputFields} label='note title' />
                    <TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { handleTagsChange(e.target.value) }} className={classes.inputFields} label='tags (separate tags with coma)' />
                    <TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { handleDescriptionChange(e.target.value) }} className={classes.inputFields} label='description' />
                </DialogContent>

                <DialogActions>
                    <Button>Add</Button>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>

            </Dialog>

        </div>
    )
}

export default AddNoteDialog
