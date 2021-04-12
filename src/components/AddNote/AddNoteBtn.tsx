import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';
import AddNoteDialog from './AddNoteDialog'

const useStyles = makeStyles({
    addNote: {

        position: 'sticky',
        bottom: '10px',
        right: '10px',
        float: 'right'

    },
    plusIcon: {
        margin: '0',
        textAlign: 'center',
        padding: '0 10px 0 10px',
        fontSize: '4rem',
        width: 'fit-content',
        hight: 'fit-content',
        backgroundColor: '#d6cd1a',
        borderRadius: '50%',

        '&:hover': {
            backgroundColor: '#b0a80c',
        }
    },
    
})
interface Props {

}

const AddNoteBtn: React.FC = (props: Props) => {

    const [open, setOpen] = useState<true | false>(false)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className={classes.addNote}>
            {/* on click opens dialog box */}
            <Button className={classes.plusIcon} onClick={handleOpen}>➕</Button>
            <AddNoteDialog open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
    )
}

export default AddNoteBtn
