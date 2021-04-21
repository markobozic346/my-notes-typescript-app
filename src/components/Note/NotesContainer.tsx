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


    const SearchThroughtNotes = (notes: StateType['notes'], searchKeywords: string, searchTags: string) => {
        let tempFilteredArray: StateType['notes'] = [];
        if (searchKeywords !== '') {
            notes.map((note) => {
                if (note.description.includes(searchKeywords)) {
                    tempFilteredArray.push(note);
                }
            })
        }
        if (searchTags !== '') {
            notes.map(note => {
                if (note.tags.includes(searchTags)) {
                    tempFilteredArray.push(note);
                }
            })
        }
        if (searchKeywords === '' && searchTags === '') {
            tempFilteredArray = [...notes]
        }

        return tempFilteredArray;
    }
    let newFilteredArray = SearchThroughtNotes(notes, searchKeywords, searchTags);
    return (
        <div className={classes.notesContainer}>

            {newFilteredArray.map((note, index) => (<Note key={index} id={note.id} title={note.title} tags={note.tags} description={note.description} />))}

        </div>
    )
}

export default NotesContainer
