import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Nav, Navbar, NavItem, Button, Grid, Jumbotron} from 'react-bootstrap';
import Home from './views/Home';
import Services from './views/Services';
import Location from './views/Location';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class TheBar extends Component{
  render(){
    return(
        <Router>
        <div className="Navigationbar">
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
                <Navbar.Collapse>
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/location">Location</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/signup">SignUp</Link></li>
                  <li><Link to="/signin">SignIn</Link></li>
                </ul>
                </Navbar.Collapse>
            </Navbar>
             <Route exact path='/' component={Home}/>
              <Route  path='/services' component={Services}/>
              <Route  path='/location' component={Location}/>
              <Route  path='/signin' component={SignIn}/>
              <Route  path='/signup' component={SignUp}/>

        </div>
        </Router>
    )
  }
}


class App extends Component {
 render(){
     return(
         <div className="App">
         <TheBar />

         </div>

     )
 }
}

export default App;
