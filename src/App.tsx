import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Usuario from './Componentes/Usuario/Usuario';
import Nav from './Navbar/Navbar';
import Catalogo from './Componentes/Catalogo/Catalogo';
import About from './Componentes/About/About';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Catalogo" component={Catalogo}/>
        <Route path="/Usuario" component={Usuario}/>
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
