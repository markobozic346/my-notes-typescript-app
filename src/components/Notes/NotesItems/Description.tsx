import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   description: {

   }
})

interface Props {

}

const Description = (props: Props) => {
    const classes = useStyles()
    return (
        <Typography className={classes.description}>
            ovo je opis
        </Typography>
    )
}

export default Description
