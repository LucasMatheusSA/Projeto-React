import React from 'react';
import './App.css';
import Nav from './Navbar/Nav';
import About from './About/About';
import Catalogo from './Catalogo/Catalogo.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
