import React, { Component } from "react";
import "./assets/styles/scss/App.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/HOC/Layout/Layout";
import WeatherCommon from "./components/Pages/WeatherCommon/WeatherCommon";
import WeatherCity from "./components/Pages/WeatherCity/WeatherCity";
import PageSearchWeather from "./components/Pages/PageSearchWeather/PageSearchWeather";
import { connect } from "react-redux";
import { fetchIp } from "./Redux/actions/api/geoip2/geoipAction";

// import $ from 'jquery';
// window.$ = window.jQuery=jquery;
// import  './assets/js/nav.top.js';
// require('./assets/js/nav.top.js');

class App extends Component {
  componentDidMount() {
    //Load ip geo data user once
    if(!this.props.userGeoIpIsLoaded){
      this.props.fetchIp("city");
    }
      
    
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={WeatherCommon} />
        <Route path="/weather/city/:cityId" component={WeatherCity} />
        <Route path="/weather/search" component={PageSearchWeather} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    );
  }
}


/**
 * Get async state geo ip for current user
 * ----------------------------------------
 * @see https://dev.maxmind.com/geoip/geoip2/javascript/
 * 
 */
const mapStateToProps = (state) => {
  return {
    userGeoIp: state.geoipReduser.data,
    userGeoIpIsLoaded: state.geoipReduser.isLoaded,
    userGeoIpError: state.geoipReduser.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchIp: (endpoint) => dispatch(fetchIp(endpoint)), //endpoint: city, country or insights
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
