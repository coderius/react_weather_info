import React, { Component } from 'react'
// import logo from './logo
import './assets/styles/scss/App.scss';
import $ from 'jquery';
// window.$ = window.jQuery=jquery;
// import  './assets/js/nav.top.js';
require('./assets/js/nav.top.js');

class App extends Component {

  componentDidMount() {
    $('#nav-main').fixedNav();
  }

  render() {

    return (
      <React.Fragment>
        <div id="nav-main" className="">
          <div className="row-container">
              <a id="logo" href="/">
                <img src="https://www.elegantthemes.com/images/logo.svg" alt="Elegant Themes"/>
              </a>
              <nav>
                <ul className="menu">
                  <li className="menu-wrapper"><a href="/" className="menu-item">Home</a></li>
                  <li className="menu-wrapper"><a href="/" className="menu-item">All</a></li>
                  <li className="menu-wrapper"><a href="/" className="menu-item">History</a></li>
                </ul>

              </nav>
            </div>
          </div>
      </React.Fragment>
        )
      }
    }
    
    export default App;
