import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    
    title: {
        fontSize: '1.5rem'
    }
})

interface Props {
title: string,
}

const Title = ({title}: Props) => {
    const classes = useStyles()
    return (
        <Typography className={classes.title}>
            {title}
        </Typography>
    )
}

export default Title
