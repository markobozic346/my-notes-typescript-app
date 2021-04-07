//dependencies
import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//import components
import Title from './NoteItems/Title'
import Description from './NoteItems/Description'
import Settings from './NoteItems/Settings'
import Tags from './NoteItems/Tags'
// styling

const useStyles = makeStyles({
    note: {
        margin: '20px auto 20px auto',
        padding: '10px 10px 10px 10px',
        maxWidth: '600px',
        minWidth: '280px',
        height: '150px',
        backgroundColor: '#FFFF99',
    }
    
})


interface Props {

}

const Notes = (props: Props) => {
    const classes = useStyles()
    // import styles
    

    return (
            <Paper className={classes.note} elevation={3}>
                <Title/>
                <Tags/>
                <Description/>
                <Settings/>
            </Paper>
    )
}




export default Notes
