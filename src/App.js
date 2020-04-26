import React, { Component } from 'react'
import './assets/styles/scss/App.scss';
import {
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router,
} from 'react-router-dom';
import Layout from './components/HOC/Layout/Layout';
import WeatherCommon from './components/Pages/WeatherCommon/WeatherCommon';
import WeatherCity from './components/Pages/WeatherCity/WeatherCity';
// import $ from 'jquery';
// window.$ = window.jQuery=jquery;
// import  './assets/js/nav.top.js';
// require('./assets/js/nav.top.js');

class App extends Component {

  componentDidMount() {

  }

  render() {

    let routes = (
      
        <Switch>
            <Route path="/" exact component={WeatherCommon} />
            <Route path="/weather/city/:city" component={WeatherCity} />
            <Redirect to="/" />
        </Switch>
        
    )

    return (
          <Router>
              <Layout>
                { routes }
              </Layout>
          </Router>
        )
      }
    }
    
    export default App;
