import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    
    title: {
        fontSize: '1.5rem'
    }
})

interface Props {

}

const Title = (props: Props) => {
    const classes = useStyles()
    return (
        <Typography className={classes.title}>
            React Components
        </Typography>
    )
}

export default Title
