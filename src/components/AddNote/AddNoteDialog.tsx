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
interface newNoteType {
    title: string,
    tags: string[],
    description: string,
}
const AddNoteDialog = (props: Props) => {
    //states

    const [newNote, setNewNote] = useState<newNoteType>({
        title: '',
        tags: [],
        description: '',
    })

    // temporary state
    const [tags, setTags] = useState<string>('');

    console.log(newNote)
    // handle input functions
    const handleTitleChange = (value: string) => {
        setNewNote({ ...newNote, title: value });
    }

    const handleTagsChange = (value: string) => {
        // set value to temporary tags state 
        setTags(`${value},`)
    }

    const handleDescriptionChange = (value: string) => {
        setNewNote({ ...newNote, description: value })
    }

    const makeArray = (tags: string) => {
        let wordStart: number = 0;
        let arrayOfTags: string[] = [];
        let tempTags: string = tags;
        for(let i = 0; i < tempTags.length; i++){
            // detect coma in string
            if(tempTags[i] === ','){
                //deletes first coma
                tempTags = tempTags.replace(',','');
                //slice word before coma
                let slicedWord = tempTags.slice( wordStart, i)
                // delete whitespaces from word and push it into array
                arrayOfTags.push(slicedWord.trim());
                wordStart = i;
            }
        }
        return arrayOfTags;
    }

    const handleAddNote = () => {
        // check if input fields are empty

        // get tags from temp string to array
        setNewNote({...newNote,
            tags: makeArray(tags)});

            //dispatch to store
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
                    <Button onClick={handleAddNote}>Add</Button>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>

            </Dialog>

        </div>
    )
}

export default AddNoteDialog
