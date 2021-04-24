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
    id: number,
    title: string,
    tags: string[],
    description: string,
}

const Notes = ({ id, title, tags, description }: Props) => {
    const classes = useStyles()



    return (

        <Paper className={classes.note} elevation={3}>
            <Title title={title} />
            <Tags tags={tags} />
            <Description description={description} />
            <Settings id={id} />

        </Paper>
    )
}




export default Notes
