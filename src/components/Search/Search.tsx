import React, { ChangeEvent, useState } from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { addSearchKeywords } from '../../actions/actions'
const useStyles = makeStyles({
    searchContainer: {
        textAlign: 'center',
        margin: 'auto',
        maxWidth: '600px',
        minWidth: '300px',
    },
    Input: {
        maxWidth: '600px',
        minWidth: '280px',
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
    searchBtn: {
        marginTop: '10px',
        backgroundColor: '#d6cd1a',
        '&:hover': {
            backgroundColor: '#b0a80c',
        }
    }
})





interface Props {

}

const Search = (props: Props) => {
    const classes = useStyles();

    const dispatch = useDispatch();


    const [keywords, setKeywords] = useState<string>('');
    const [tags, setTags] = useState<string>('')



    const handleKeywordsChange = (value: string) => {
        setKeywords(value);
        dispatchSearchKeywords();
    }
    const handleTagsChange = (value: string) => {
        setTags(value)
        dispatchSearchKeywords();
    }
    const dispatchSearchKeywords = () => {
        dispatch(addSearchKeywords(keywords, tags))
    }
    return (
        <div className={classes.searchContainer}>
            <TextField onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { handleKeywordsChange(e.target.value) }}
                value={keywords}
                id='standard-basic btn1' label='keywords' className={classes.Input} />

            <TextField onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { handleTagsChange(e.target.value) }}
                id='standard-basic btn2' label='tags' className={classes.Input} />
        </div>
    )
}

export default Search
