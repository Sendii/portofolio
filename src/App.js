import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './asset/css/custom.css'

import Header from './component/Header';
import Home from './component/Home';
import Skill from './component/Skill';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
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
            <div className="row">
              <div className="col-sm-4" style={{backgroundColor: "red", height: "600px"}}>
                Ini foto
              </div>
              <div className="col-sm" style={{backgroundColor: "yellow"}}>
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
