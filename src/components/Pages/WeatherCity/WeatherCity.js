///WeatherList
import React, { Component } from "react";

class WeatherCity extends Component {

    render() {
        return (
            <>
                <p>WeatherCity {this.props.match.params.city}</p>
            </>
        );
    }
}

export default WeatherCity;
