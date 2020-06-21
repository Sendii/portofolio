import React from 'react';
import logo from './asset/img/letterS.png';
import './App.css';
import './asset/css/custom.css'

import Header from './component/Header';
import Home from './component/Home';
import Skill from './component/Skill';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
import img_human from './asset/img/human.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
    <link rel="shortcut icon" type="image/png/ico" href={logo} />
    <title>ea</title>
        <Header />
          <div className="container">
            <div className="row">
              <div className="col-sm-4" id="left-content">
                <img className="img-fluid center" id="foto" src={img_human} alt=""/>
              </div>
              <div className="col-sm" id="right-content">
                <div className="mt-5 ml-4" style={{margin: "20px"}}>
                  <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/skills' component={Skill} />
                    <Route path='/projects' component={Project} />
                    <Route path='/about-us' component={About} />
                    <Route path='/contact-us' component={Contact} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>      
    </Router>
  );
}

export default App;
