//dependencies
import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//import components
import Title from './NotesItems/Title'
import Description from './NotesItems/Description'
import Settings from './NotesItems/Settings'
import Tags from './NotesItems/Tags'
// styling

const useStyles = makeStyles({
    note: {
        margin: 'auto auto',
        paddingLeft: '10px',
        width: '600px',
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
