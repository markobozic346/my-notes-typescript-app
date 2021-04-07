import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   description: {
    position: 'relative',
    bottom: '65%',
    left: '95%'
   }
})
interface Props {
    
}

const Settings = (props: Props) => {
    const classes = useStyles()
    return (
        <ExpandMoreIcon className={classes.description}/>
    )
}

export default Settings
