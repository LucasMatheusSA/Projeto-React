import React from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import Icon from '../Images/Navbar/icon_whisky.png';

import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ButtonAccess from '../Components/Buttons/ButtonAccess';


const CatalogButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        padding: '6px 12px',
        color: '#A67E6E',
        lineHeight: 1.5,
        marginRight: '5px',
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
            color: '#A67E6E',
            fontFamily: [
                'Malaga',
            ].join(','),
        },
    }),
);

const theme = createMuiTheme();

theme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};

const permition = localStorage.getItem('permition') !== "ROLE_ADMIN" ? localStorage.getItem('permition') === "ROLE_USER" ? 1 : 0 : 2;

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar className="body">
                    <img className="square" src={Icon} alt="website logo" />
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <ThemeProvider theme={theme}>
                            <Typography align="justify" variant="h3" className={classes.title}>
                                WHISKY'S
                        </Typography>
                        </ThemeProvider>
                    </Link>
                    <Link to="/Catalogo" style={{ textDecoration: 'none', position: "absolute", right: 100 }} hidden={permition === 0}>
                        <CatalogButton className="button-space" disableRipple color="inherit">Catálogo</CatalogButton>
                    </Link>
                    <ButtonAccess/>
                </Toolbar>
            </AppBar>
        </div>
    );

}



