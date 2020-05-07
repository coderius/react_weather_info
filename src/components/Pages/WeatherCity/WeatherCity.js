///WeatherList
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurWeatherOneLocation } from "../../../Redux/actions/api/openweathermap/apiActions";

class WeatherCity extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.match.params.cityId;
    let params = {
      id,
      units: "metric", //Celsium
    };
    this.props.fetchCurWeatherOneLocation(params);
    console.log("mounted");
  }

  componentWillUnmount() {}

  render() {
    console.log(this.props.curCityData.coord ? this.props.curCityData.coord.lat : "not load");
    // setTimeout(()=> console.log(this.props.curCityData.coord.lat), 1000);
    return (
      <>
        <CityHeader
          title="Weather"
          desc="In City"
          userCity={this.props.match.params.cityName}
          searchToast={
            "Want choose another city? Search City and get weather info..."
          }
        />

        <section id="city-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-centered header-wrap-padding">
                <h2 className="">
                  Current weather and forecasts in{" "}
                  {this.props.match.params.cityName}
                </h2>
              </div>
              <div className="col-sm-4">
                <h2 className="ui header">
                  Weather in {this.props.curCityName},
                  {/* {this.props.apiReduser.data.cod} */}
                </h2>
              </div>
              <div className="col-sm-8"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

//Get async state
const mapStateToProps = (state) => {
  return {
    // apiCurWeatherOneCityReduser: state.apiCurWeatherOneCityReduser,
    curCityData: state.apiCurWeatherOneCityReduser.data,
    curCityDataLoading: state.apiCurWeatherOneCityReduser.loading,
    curCityDataIsLoaded: state.apiCurWeatherOneCityReduser.isLoaded,
    curCityDataError: state.apiCurWeatherOneCityReduser.error,

    //Defined props
    curCityName: state.apiCurWeatherOneCityReduser.data.name,
    // curCityCountry: state.apiCurWeatherOneCityReduser.data.sys.country,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurWeatherOneLocation: (q) => dispatch(fetchCurWeatherOneLocation(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCity);
