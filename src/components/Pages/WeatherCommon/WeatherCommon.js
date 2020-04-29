///WeatherList
import React, { Component } from "react";
import MainHeader from "../../Containers/Headers/MainHeader/MainHeader";
import SeveralCitiesBlockContainer from "../../Containers/SeveralCitiesBlockContainer/SeveralCitiesBlockContainer";

class WeatherCommon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Header: {
                title: "What about WEATHER INFO ...",
                desc: "This is some html",
                buttonText: "More info"
            },
            SeveralCitiesBlockContainer:{
                header: "Several Cities Block Container",
            }
        }
    }

    render() {
        return (
            <>
                <p>WeatherCommon</p>
                <MainHeader title={this.state.Header.title} desc={this.state.Header.desc} buttonText={this.state.Header.buttonText} />
                <SeveralCitiesBlockContainer header={this.state.SeveralCitiesBlockContainer.header} />
            </>
        );
    }
}

export default WeatherCommon;
