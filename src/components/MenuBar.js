import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Services from '../views/Services';
import Location from '../views/Location';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import $ from "jquery";

class MenuBar extends Component{
 constructor(props) {
    super(props);
    this.state = {
      classNameSticky: "menu-area navbar-fixed-top"
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this)
}
componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

}
componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

shouldComponentUpdate(nextProps, nextState){
    return (this.state.classNameSticky !== nextState.classNameSticky);
  }

handleScroll() {
  if (window.scrollY > 100) {
    this.setState({classNameSticky:'menu-area navbar-fixed-top sticky-menu'});
  } else if (window.scrollY < 100) {
    this.setState({classNameSticky:'menu-area navbar-fixed-top'});
  }
}
handleClick(e) {
  e.preventDefault();
 let id = e.target.getAttribute('href');
  if($(id).length >0)
  {
     $(e.target).addClass('active');
     $('html, body').animate({scrollTop: $(id).offset().top
  }, 500);
  }
}

  render(){
    return(
        <Router>
         <div className={this.state.classNameSticky}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mainmenu">

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
                    <li><a onClick={(e) => this.handleClick(e)} href="#about">About</a></li>
                    <li><a onClick={(e) => this.handleClick(e)} href="#service">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#price">Price</a></li>
                    <li><a href="#news">News</a></li>
                    <li><Link to="/location">Contact</Link></li>
                  </ul>

                  </Navbar.Collapse>
              </Navbar>

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