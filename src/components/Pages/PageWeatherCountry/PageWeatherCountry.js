///PageWeatherCountry
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";

class PageWeatherCountry extends Component {

    render() {
        console.log(this.props.match.params);
        return (
            <>
                <CityHeader
                    title="In Country"
                    desc="Weather in Your Country"
                    userCity="Ukraine"
                    
                />
                <p>PageWeatherCountry {this.props.match.params.countryName}</p>
            </>
        );
    }
}

export default PageWeatherCountry;