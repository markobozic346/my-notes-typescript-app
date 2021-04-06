import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Note from './Note'
const useStyles = makeStyles({
    
    notesContainer: {
        
    }
})
interface Props {
    
}

const NotesContainer = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.notesContainer}>
            <Note/>
            <Note/>
            <Note/>
            <Note/>


        </div>
    )
}

export default NotesContainer
