import React, { Component } from 'react'
import './assets/styles/scss/App.scss';
import MenuTop from './components/ui/menu-top/MenuTop'
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
        <MenuTop />
      </React.Fragment>
        )
      }
    }
    
    export default App;
