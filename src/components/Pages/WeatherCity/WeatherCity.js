///WeatherList
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";

class WeatherCity extends Component {

    render() {
        console.log(this.props.match.params);
        return (
            <>
                <CityHeader
                    title="In City"
                    desc="Weather in Your City"
                    userCity="Kharkiv"
                    
                />
                <p>WeatherCity {this.props.match.params.cityName}</p>
            </>
        );
    }
}

export default WeatherCity;
