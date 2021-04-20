import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Note from './Note'
import { useSelector } from 'react-redux'
import { StateType } from '../../reducers/noteReducer';
import { SearchStateType } from '../../reducers/searchReducer'

const useStyles = makeStyles({

    notesContainer: {
        margin: '0 auto 0 auto',
    }
})
interface Props {

}
interface noteSelectorType {
    noteReducer: StateType
}
interface searchSelectorType {
    searchReducer: SearchStateType
}
const NotesContainer = (props: Props) => {
    const classes = useStyles();

    // get data from redux store
    const notes = useSelector<noteSelectorType, StateType['notes']>((state) => {
        return state.noteReducer.notes
    })
    const searchKeywords = useSelector<searchSelectorType, string>(state => {

        return state.searchReducer.keywords
    })
    const searchTags = useSelector<searchSelectorType, string>(state => {
        return state.searchReducer.tags
    })




    return (
        <div className={classes.notesContainer}>

            {notes.map((note, index) => (<Note key={index} id={note.id} title={note.title} tags={note.tags} description={note.description} />))}

        </div>
    )
}

export default NotesContainer
