import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles({
    logo: {
        width: '400px',
        margin: '10px auto 10px auto',
        fontFamily: 'Pacifico, cursive',
        fontSize: '3rem',
        color:'#d6cd1a',
        textShadow: '2px 2px black'
    },
    
})

interface Props {

}

const Logo = (props: Props) => {
    const classes = useStyles();
    return (
        
            <Typography className={classes.logo}>
                📝 My Notes 🖊️
        </Typography>
        

    )
}

export default Logo
