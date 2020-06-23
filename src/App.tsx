import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Divider, Grid, Container } from "@material-ui/core";
import { Transition } from 'react-spring/renderprops';
import { useTransition, animated } from 'react-spring';
import Fab from '@material-ui/core/Fab';


import Nav from './Navbar/Navbar';
import Catalogo from './Views/Catalogo/Catalogo';
import Login from './Views/Login/Login';
import About from './Views/About/About';
import Whisky from './Views/Whisky/Whisky';
import User from './Views/User/User';
import Card from './Components/Card/Card';
import HomeImage from './Components/Home/HomeImage';
import HalfImage from './Components/Home/HomeIformations';
import imgCup from './Images/Home/whisky_cup.jpg';
import UserIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { toast } from 'react-toastify';

function checkLogin(){

    let token = localStorage.getItem('token');
    let config = {
        headers: {
            'Authorization': token
        }
    };
    if (token == null) {
        toast.error("Para visualizar os whiskies é necessario fazer login!");
    } else {
        axios.get(`https://project-whiskies-backend.herokuapp.com/api/whisky/whisky-list`, config)
        .then(res => {
            if (res.status == 403) {
            }
            console.log(res);
            console.log(res.data);
        })
    }
}

checkLogin();


function App() {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Catalogo" component={Catalogo} />
                    <Route path="/Login" component={Login} />
                    <Route path="/User" component={User} />
                    <Route path="/Whisky" component={Whisky} />
                </Switch>
                <About />
            </div>

        </Router>
    );
}


const Home = () => (
    <Container fixed>
        <br />
        <HomeImage />
        <div>
            <h1> Mais populares </h1>
            <Divider variant="middle" />
            <p> Whiskies mais populares e favoritados entre os usuários.</p>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
            <br />
            <HalfImage />
            <h1> Listagem </h1>
            <Divider variant="middle" />
            <p> Listagem de whiskies.</p>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    </Container>
);

export default App;
