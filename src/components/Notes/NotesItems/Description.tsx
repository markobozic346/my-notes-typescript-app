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
            React component is independed and reusable piece of code, they work like javascript functions, but they return HTML via render() method
        </Typography>
    )
}

export default Description
