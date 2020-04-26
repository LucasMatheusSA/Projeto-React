import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import Icon from './uisque.png';

import {Link} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";

const LoginButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        padding: '6px 12px',
        color: '#A67E6E',
        lineHeight: 1.5,
        fontFamily: [
            'Malaga',
        ].join(','),
        '&:hover': {
            backgroundColor: '#3d3c3c',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const CatalogButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        padding: '6px 12px',
        color: '#A67E6E',
        lineHeight: 1.5,
        fontFamily: [
            'Malaga',
        ].join(','),
        '&:hover': {
            backgroundColor: '#3d3c3c',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxHeight: '64px',
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
        },
    }),
);



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className="body">
                    <img className="square" src={Icon} alt="website logo"/>
                    <Typography variant="h6" className={classes.title}>
                        Whisky's
                    </Typography>
                    <Link to="/Catalogo" style={{textDecoration: 'none'}}>
                        <CatalogButton className="padding-right" disableRipple color="inherit">Catálogo</CatalogButton>
                    </Link>
                    <LoginButton className="padding-right" disableRipple color="inherit">Login / Register</LoginButton>
                </Toolbar>
            </AppBar>
        </div>
    );

}



