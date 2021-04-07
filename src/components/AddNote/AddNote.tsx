import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';
const useStyles = makeStyles({
    addNote: {
        
        position: 'sticky',
        bottom: '10px',
        right: '10px',
        float: 'right'
        
    },
    plusIcon: {
        margin: '0',
        textAlign: 'center',
        padding: '0 10px 0 10px',
        fontSize: '4rem',
        width: 'fit-content',
        hight: 'fit-content',
        backgroundColor: '#d6cd1a',
        borderRadius: '50%',

        '&:hover': {
            backgroundColor: '#b0a80c',
        }
    }
})
interface Props {
    
}

const AddNote = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.addNote}>
            <Button className={classes.plusIcon}>➕</Button>
            
        </div>
    )
}

export default AddNote
