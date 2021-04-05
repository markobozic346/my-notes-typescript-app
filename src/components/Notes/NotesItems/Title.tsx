import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    note: {
        width: '600px',
        height: '150px',
        backgroundColor: '#FFFF99',
    },
    title: {

    }
})

interface Props {

}

const Title = (props: Props) => {
    const classes = useStyles()
    return (
        <Typography className={classes.title}>
            ovo je naslov
        </Typography>
    )
}

export default Title
