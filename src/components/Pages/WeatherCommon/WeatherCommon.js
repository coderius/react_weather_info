///WeatherList
import React, { Component } from "react";
import MainHeader from "../../UI/MainHeader/MainHeader";
import SeveralCitiesBlockContainer from "../../Containers/SeveralCitiesBlockContainer/SeveralCitiesBlockContainer";

class WeatherCommon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Header: {
                title: "WEATHER INFO",
                desc: "This is some html",
                buttonText: "More info"
            },
            SeveralCitiesBlockContainer:{
                blockHeader: "Several Cities Block Container",
            }
        }
    }

    render() {
        return (
            <>
                <MainHeader 
                    title={this.state.Header.title} 
                    desc={this.state.Header.desc} 
                    buttonText={this.state.Header.buttonText} 
                />
                <SeveralCitiesBlockContainer 
                    /* blockHeader={this.state.SeveralCitiesBlockContainer.blockHeader} */
                />
            </>
        );
    }
}

export default WeatherCommon;
