import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    searchContainer: {
        margin: 'auto',
        maxWidth: '600px',
        minWidth: '300px',
    },
    Input: {
        maxWidth: '600px',
        minWidth: '240px',
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
    searchBtn:{
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
            <TextField id='standard-basic' label='keywords' className={classes.Input} />
            <TextField id='standard-basic' label='tags' className={classes.Input}/>
            <Button className={classes.searchBtn}>Search</Button>
        </div>
    )
}

export default Search
