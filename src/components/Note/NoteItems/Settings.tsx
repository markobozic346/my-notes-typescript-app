import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles({
    description: {
        position: 'relative',
        bottom: '65%',
        left: '95%'
    }
})
interface Props {

}

const Settings: React.FC = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<EventTarget & SVGSVGElement | null>(null);
    const [isClicked, setIsClicked] = useState(false);

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
                }}
            >

                Delete
            </MenuItem>
        </Menu>
    </>
    )
}

export default Settings
