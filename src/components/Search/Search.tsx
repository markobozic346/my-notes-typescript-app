import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

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
    return (
        <div className={classes.searchContainer}>
            <TextField id='standard-basic btn1' label='keywords' className={classes.Input} />
            <TextField id='standard-basic btn2' label='tags' className={classes.Input} />

        </div>
    )
}

export default Search
