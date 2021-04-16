import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Note from './Note'
import { useSelector } from 'react-redux'
import { StateType } from '../../reducers/noteReducer';
const useStyles = makeStyles({

    notesContainer: {
        margin: '0 auto 0 auto',
    }
})
interface Props {

}
interface selectorType{
    noteReducer: StateType
}
const NotesContainer = (props: Props) => {
    const classes = useStyles();

    // get data from redux store
    const notes = useSelector<selectorType, StateType['notes']>((state) => {
        console.log(state.noteReducer)
        return state.noteReducer.notes
    })
    
    return (
        <div className={classes.notesContainer}>
             {notes.map((note, index) => (<Note key={index} id={note.id} title={note.title} tags={note.tags} description={note.description} />))}  

        </div>
    )
}

export default NotesContainer
