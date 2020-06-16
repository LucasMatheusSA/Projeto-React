import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Divider, Grid, Container } from "@material-ui/core";
import {Transition} from 'react-spring/renderprops';
import {useTransition, animated} from 'react-spring';
import Fab from '@material-ui/core/Fab';

import Nav from './Navbar/Navbar';
import Catalogo from './Views/Catalogo/Catalogo';
import Login from './Views/Login/Login';
import About from './Views/About/About';
import Whisky from './Views/Whisky/Whisky';
import User from './Views/User/User';
import Card from './Components/Card/Card';
import HomeImage from './Components/HomeImage/HomeImage';
import imgCup from './Images/Home/whisky_cup.jpg';
import UserIcon from '@material-ui/icons/Add';


function App() {

    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Catalogo" component={Catalogo}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/User" component={User}/>
                    <Route path="/Whisky" component={Whisky}/>
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
            {/* <Transition
                items={items} keys={item => item.key}
                from={{ transform: 'translate3d(0,-40px,0)' }}
                enter={{ transform: 'translate3d(0,0px,0)' }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {item => props => <div style={props}>{item.text}</div>}
            </Transition> */}
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
