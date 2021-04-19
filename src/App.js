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
import img_me from './asset/img/foto.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
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
                <div className="flex justify-center flex-col align-items-center">
                  <img className="img-fluid center" id="foto" src={img_me} alt=""/>
                </div>
              </div>
              <div className="col-sm" id="right-content">
              <div className="container" id="nav-responsive" style={{display: "none"}}>
                <div className="row">
                  <div className="col">
                    <NavLink to="/skills">Skill</NavLink>
                  </div>
                  <div className="col">
                    <NavLink to="/projects">Projects</NavLink>
                  </div>
                  <div className="col">
                    <NavLink to="/">Sendi Dian</NavLink>
                  </div>
                  <div className="col">
                    <NavLink to="/about-us">About</NavLink>
                  </div>
                  <div className="col">
                    <NavLink to="/contact-us">Contact</NavLink>
                  </div>
                </div>
              </div>
                <div className="mt-5">
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
