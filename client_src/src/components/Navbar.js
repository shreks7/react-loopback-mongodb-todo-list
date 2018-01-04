import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
          <div className="uk-light">
           <div className="uk-navbar-container tm-navbar-container" uk-navbar="true">
            <div className="uk-navbar-left">
              <a href="" className="uk-navbar-item uk-logo">ToDo List</a>
              </div>
            <div className="uk-navbar-right">
              <a className="uk-navbar-toggle" uk-icon="icon: plus"></a>
              <a className="uk-navbar-toggle" uk-icon="icon: user"></a>
            </div>
          </div>
          </div>
    )
  }
}

export default Navbar;
