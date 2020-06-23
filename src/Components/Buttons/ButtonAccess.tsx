import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        padding: '6px 12px',
        color: '#A67E6E',
        lineHeight: 1.5,
        float: 'right',
        fontFamily: [
            'Malaga',
        ].join(','),
        '&:hover': {
            backgroundColor: '#3d3c3c',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#52482B',
            borderColor: '#52482B',
        },
    },
}
);

const LoginButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        padding: '6px 12px',
        color: '#A67E6E',
        lineHeight: 1.5,
        float: 'right',
        fontFamily: [
            'Malaga',
        ].join(','),
        '&:hover': {
            backgroundColor: '#3d3c3c',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#52482B',
            borderColor: '#52482B',
        },
    },
})(Button);

const permition = localStorage.getItem('permition') != "ROLE_ADMIN" ? localStorage.getItem('permition') == "ROLE_USER" ? 1 : 0 : 2;

function refreshPage() {
    window.location.reload(false);
  }

export default function ButtonAccess() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    let hist = useHistory();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseExit = () => {
        setAnchorEl(null);
        localStorage.removeItem('token');
        localStorage.removeItem('permition');
        hist.push("/Login");
        refreshPage();
    };

    return (
        <div style={{ textDecoration: 'none', position: "absolute", right: 50 }}>
            <Link to="/Login" hidden={permition != 0}>
                <LoginButton className="button-space" disableRipple color="inherit">Login / Register</LoginButton>
            </Link>
            <div hidden={permition == 0}>

            <IconButton aria-label="more" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <MoreVertIcon />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                <Link to="/User" hidden={permition != 2} >
                    <MenuItem onClick={handleClose} >Configurações</MenuItem>
                </Link>
                <Link to="/Login">
                    <MenuItem onClick={handleCloseExit}>Sair</MenuItem>
                </Link>
            </Menu>
            </div>
        </div>
    );
}