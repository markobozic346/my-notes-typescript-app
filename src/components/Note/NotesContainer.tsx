import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Note from './Note'
import {useSelector} from 'react-redux'
import { StateType } from '../../reducers/rootReducer';
const useStyles = makeStyles({
    
    notesContainer: {
        margin: '0 auto 0 auto',
    }
})
interface Props {
    
}

const NotesContainer = (props: Props) => {
    const classes = useStyles();

    // get data from redux store
    const notes = useSelector<StateType, StateType['notes']>((state) => state.notes)
    return (
        <div className={classes.notesContainer}>
            {notes.map(note => (<Note/>))}


        </div>
    )
}

export default NotesContainer
