import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { removeNote } from '../../../actions/actions'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    description: {
        position: 'relative',
        top: '-50%',
        left: '95%',
    }
})
interface Props {
    id: number;
}

const Settings = ({ id }: Props) => {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState<EventTarget & SVGSVGElement | null>(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleRemoveNote = () => {
        dispatch(removeNote(id))
    }
    const classes = useStyles()
    return (<>
        <ExpandMoreIcon className={classes.description} aria-controls="more-menu"
            aria-haspopup="true"
            onClick={(e) => {
                setAnchorEl(e.currentTarget);
            }} />

        <Menu
            id="more-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {
                setAnchorEl(null);
            }}
        >
            <MenuItem
                onClick={() => {
                    setIsClicked(!isClicked);
                }}
            >

                Expand
            </MenuItem>
            <MenuItem
                onClick={() => {
                    setAnchorEl(null);
                }}
            >

                Edit
            </MenuItem>
            <MenuItem
                onClick={() => {
                    setAnchorEl(null);
                    handleRemoveNote()
                }}
            >

                Remove
            </MenuItem>
        </Menu>
    </>
    )
}

export default Settings
