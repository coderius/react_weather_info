///WeatherList
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurWeatherOneLocation } from "../../../Redux/actions/api/openweathermap/apiActions";
import {
  transformDate,
  transformFromDate,
  currentOffsetDate,
} from "../../../helpers/DateHelper";
import { camputeBreeze } from "../../../helpers/WeatherHelper";
import Clocks from "../../Containers/Clocks/Clocks";

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
    // currentDate(3600)
    // console.log("local time---", currentDate(3600));
    // console.log("local of", new Date().getTimezoneOffset());
    // if(this.props.curCityDataIsLoaded)console.log(this.props.curCityData.coord.lat);

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
            {this.props.curCityDataIsLoaded ? (
              <div className="row">
                <div className="col-sm-12 text-centered header-wrap-padding">
                  <h2 className="headline-3 orange-darken-4">
                    Current weather and forecasts in{" "}
                    {this.props.match.params.cityName}
                  </h2>
                </div>
                <div className="col-sm-4 simple-details">
                  <h3 className="ui header text-centered">
                    Weather in {this.props.curCityData.name},
                    {this.props.curCityData.sys.country}
                  </h3>
                  {/* image */}
                  <div className="simple-details__visual">
                    <img
                      // Weather icon
                      src={`//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.curCityData.weather[0].icon}.png`}
                      alt={`Weather in ${this.props.curCityData.name}}, ${this.props.curCityData.sys.country}`}
                      className="ui middle aligned tiny image"
                    />
                    <span className="temp--tiny">
                      {this.props.curCityData.main.temp} °C
                    </span>
                    <p className="current-time blue-grey-darken-4">
                      Current time in {this.props.curCityData.name}:&nbsp;&nbsp;
                      <strong>
                        <Clocks
                          offsetSeconds={this.props.curCityData.timezone}
                        />
                      </strong>
                    </p>
                  </div>
                  {/* list */}
                  <div className="simple-details__list blue-grey-darken-4">
                    <div className="ui list">
                      <div className="item text-upper">
                        {this.props.curCityData.weather[0].description}
                      </div>
                      <div className="item">
                        Last updated{" "}
                        {transformFromDate(this.props.curCityData.dt)}
                      </div>
                    </div>
                  </div>
                  {/* table */}
                  <h4 className="ui horizontal divider header">
                    <i className="bar chart icon"></i>
                    Specifications
                  </h4>
                  <div className="simple-details__table">
                    <table className="ui celled striped table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Name">Wind</td>
                          <td data-label="Data">
                            {camputeBreeze(this.props.curCityData.wind.speed)},{" "}
                            {this.props.curCityData.wind.speed} m/s
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Cloudiness</td>
                          <td
                            data-label="Data"
                            className="Co-first-letter-upper"
                          >
                            {this.props.curCityData.weather[0].description}
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Pressure</td>
                          <td data-label="Data">
                            {this.props.curCityData.main.pressure} hpa
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Humidity</td>
                          <td data-label="Data">
                            {this.props.curCityData.main.humidity} %
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Sunrise</td>
                          <td data-label="Data">
                            {transformDate(this.props.curCityData.sys.sunrise)}
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Sunset</td>
                          <td data-label="Data">
                            {transformDate(this.props.curCityData.sys.sunset)}
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Name">Geo coords</td>
                          <td data-label="Data">
                            lat: {this.props.curCityData.coord.lat}, lon:{" "}
                            {this.props.curCityData.coord.lon}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3 className="ui header text-centered">
                    Weather in {this.props.curCityData.name},
                    {this.props.curCityData.sys.country}
                  </h3>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
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
    // curCityName: state.apiCurWeatherOneCityReduser.data.name,
    // curCityCountry: state.apiCurWeatherOneCityReduser.data.sys.country,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurWeatherOneLocation: (q) => dispatch(fetchCurWeatherOneLocation(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCity);
