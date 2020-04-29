import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Divider, Grid, Container } from "@material-ui/core";

import Nav from './Navbar/Navbar';
import Catalogo from './Views/Catalogo/Catalogo';
import About from './Views/About/About';
import Card from './Components/Card/Card';
import HomeImage from './Components/HomeImage/HomeImage';
import imgCup from './Images/Home/whisky_cup.jpg';


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Catalogo" component={Catalogo}/>
                </Switch>
                <About/>
            </div>

        </Router>
    );
}

const Home = () => (
        <Container fixed>
            <HomeImage/>
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
