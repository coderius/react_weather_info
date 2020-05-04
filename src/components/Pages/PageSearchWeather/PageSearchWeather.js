///PageSearchWeather.js
import React, { Component } from "react";
import SearchHeader from "../../UI/Header/SearchHeader";
import { connect } from "react-redux";
import { fetchCurWeatherOneLocation } from "../../../Redux/actions/api/openweathermap/apiActions";

class PageSearchWeather extends Component {
  
    static defaultProps = {
        query: "q=London",
    }    
  
    constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurWeatherOneLocation(this.props.query);
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <SearchHeader
          title="Search City..."
          desc="Search current weather and forecasts in your city"
          userCity="Kharkiv"
        />
        <p>PageSearchWeather {this.props.match.params.city}</p>
      </>
    );
  }
}

//Get async state
const mapStateToProps = (state) => {
  return {
    apiCurWeatherOneCityReduser: state.apiCurWeatherOneCityReduser,
    curWeatherOneCityData: state.apiCurWeatherOneCityReduser.data,
    curWeatherOneCityIsLoaded: state.apiCurWeatherOneCityReduser.isLoaded,
    curWeatherOneCityError: state.apiCurWeatherOneCityReduser.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurWeatherOneLocation: (query) =>
    dispatch(fetchCurWeatherOneLocation(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSearchWeather);
