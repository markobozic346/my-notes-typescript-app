import React from 'react'
import {Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   description: {

   }
})

interface Props {
description: string,
}

const Description = ({description}: Props) => {
    const classes = useStyles()
    return (
        <Typography className={classes.description}>
            {description}
        </Typography>
    )
}

export default Description
