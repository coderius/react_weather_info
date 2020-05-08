///Clocks.js
import React, { Component } from "react";
import { currentOffsetDate } from "../../../helpers/DateHelper";

class Clocks extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      time: currentOffsetDate(this.props.offsetSeconds, "HH:mm:ss"),//seconds like 3600
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: currentOffsetDate(this.props.offsetSeconds, "HH:mm:ss"),//seconds like 3600
    });
  }

  render() {
    return <>
        {this.state.time}
    </>;
  }
}

export default Clocks;
