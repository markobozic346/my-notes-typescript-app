import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

    tags: {
        color: 'gray',
        fontSize: '0.75rem',
    }
})

interface Props {
    tags: string[],
}

const Tags = ({ tags }: Props) => {
    const classes = useStyles();
    return (
        <Typography className={classes.tags}>

            {tags && tags.map(tag => (` ${tag}, `))}
        </Typography>
    )
}

export default Tags
