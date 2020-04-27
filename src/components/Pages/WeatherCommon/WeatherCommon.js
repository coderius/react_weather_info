///WeatherList
import React, { Component } from "react";
import MainHeader from "../../Views/Headers/MainHeader/MainHeader";
import MainWidgetBlock from "../../Views/Blocks/MainWidgetBlock/MainWidgetBlock";

class WeatherCommon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Header: {
                title: "What about WEATHER INFO ...",
                desc: "This is some html",
                buttonText: "More info"
            },
            MainWidgetBlock:{
                data: "Some data",
            }
        }
    }

    render() {
        return (
            <>
                <p>WeatherCommon</p>
                <MainHeader title={this.state.Header.title} desc={this.state.Header.desc} buttonText={this.state.Header.buttonText} />
                <MainWidgetBlock data={this.state.MainWidgetBlock.data} />
            </>
        );
    }
}

export default WeatherCommon;
