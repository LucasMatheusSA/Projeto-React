import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Navbar/Navbar';
import Catalogo from './Views/Catalogo/Catalogo';
import About from './Views/About/About';
import {Container} from "@material-ui/core";

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
        <div>
            <div className="homeImg" style={{backgroundImage: `url(${pathHomeImg})`}}>
                <h2> Title </h2>
                <h4> Subtitle stuf that should explain more </h4>
            </div> 

            <h1>Home Page</h1>
        </div>
    </Container>
);

export default App;
