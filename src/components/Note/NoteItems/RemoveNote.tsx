import React from 'react'
import { removeNote } from '../../../actions/actions'
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    removeNote: {
        position: 'relative',
        top: '-50%',
        left: '95%',

        '&:hover': {
            color: 'gray'
        }
    }

})
interface Props {
    id: number,
}

const RemoveNote = ({ id }: Props) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const handleRemoveNote = () => {
        dispatch(removeNote(id))
    }
    return (
        <DeleteIcon className={classes.removeNote} onClick={() => {
            handleRemoveNote()
        }} />
    )
}

export default RemoveNote
