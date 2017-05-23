import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Services from '../views/Services';
import Location from '../views/Location';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';


class MenuBar extends Component{
  render(){
    return(
        <Router>
         <div className="menu-area navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div class="col-md-12">
                <div className="mainmenu">
                  <div className="Navigationbar">
              <Navbar collapseOnSelect className="navbar-nobg">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">Demo</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                  <Navbar.Collapse>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#price">Price</a></li>
                    <li><a href="#news">News</a></li>
                    <li><Link to="/location">Contact</Link></li>
                  </ul>

                  </Navbar.Collapse>
              </Navbar>
          </div>
            <Route exact path='/' component={Home}/>
            <Route  path='/services' component={Services}/>
            <Route  path='/location' component={Location}/>
            <Route  path='/signin' component={SignIn}/>
            <Route  path='/signup' component={SignUp}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Router>
    )
  }
}
export default MenuBar;