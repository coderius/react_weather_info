///WeatherList
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";

class WeatherCity extends Component {

    render() {
        return (
            <>
                <CityHeader
                    title="In City"
                    desc="Weather in Your City"
                    userCity="Kharkiv"
                    
                />
                <p>WeatherCity {this.props.match.params.city}</p>
            </>
        );
    }
}

export default WeatherCity;
