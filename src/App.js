import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
        {/*<h3 className="m-3 d-flex justify-content-center">
        React js with api demo</h3>
        <h5 className="m-3 d-flex justify-content-center">
        Employee Management Portal</h5>*/}

        <Header />
        <div className="container">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about-us' component={About} />
            <Route path='/contact-us' component={Contact} />
          </Switch>
        </div>        
    </Router>
  );
}

export default App;
