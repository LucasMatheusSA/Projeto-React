import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Navbar/Navbar';
import Catalogo from './Views/Catalogo/Catalogo';
import About from './Views/About/About';
import {Container, Divider, Grid } from "@material-ui/core";
import Card from './Components/Card';

import pathHomeImg from './Images/Home/whisky_wallpaper.jpg';

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
        <div className="homeImg">
            <h1> Whisky's </h1>
            <Divider variant="inset" />
            <h4> Catalogo de whikies, melhor sabor e qualidade. </h4>
        </div> 
        <div>
            <img className="img" src={pathHomeImg} alt="website logo"/>
            <h1> Whisky's </h1>
            <Divider variant="inset" />
            <h4> Catalogo de whikies, melhor sabor e qualidade. </h4>
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
        </div>
    </Container>
);

export default App;
