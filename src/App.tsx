import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Divider, Grid, Container } from "@material-ui/core";


import Nav from './Navbar/Navbar';
import Home from './Components/Home/Home';
import Catalogo from './Views/Catalogo/Catalogo';
import Login from './Views/Login/Login';
import About from './Views/About/About';
import Whisky from './Views/Whisky/Whisky';
import User from './Views/User/User';

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
                    <Route path="/Whisky/:id" component={Whisky} />
                </Switch>
                <About />
            </div>

        </Router>
    );
}

export default App;
