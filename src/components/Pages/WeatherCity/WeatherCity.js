///WeatherList
import React, { Component } from "react";
import CityHeader from "../../UI/Header/CityHeader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCurWeatherOneLocation,
  fetchForecastOneLocation,
} from "../../../Redux/actions/api/openweathermap/apiActions";
import {
  transformDate,
  transformFromDate,
  currentOffsetDate,
} from "../../../helpers/DateHelper";
import { camputeBreeze } from "../../../helpers/WeatherHelper";
import Clocks from "../../Containers/Clocks/Clocks";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

class WeatherCity extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    //Param from router
    let id = this.props.match.params.cityId;

    //Current location api
    this.props.fetchCurWeatherOneLocation({
      id,
      units: "metric", //Celsium
    });

    //Forecast one location api
    this.props.fetchForecastOneLocation({
      id,
      units: "metric", //Celsium
    });

}

  componentWillUnmount() {
    console.log('unmaunt');
  }

  composeTemperatureGraph(){
    const res = this.props.forecastData.list.map((item) => {
      return {
        name: item.dt_txt,
        t: item.main.temp,
        min: item.main.temp_min,
        max: item.main.temp_max,
      }
    });
    // console.log(res);
    return res;
  }

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
            <div className="row">
              {/* heading */}
              <div className="col-sm-12 text-centered header-wrap-padding">
                <h2 className="headline-3 orange-darken-4">
                  Current weather and forecasts in{" "}
                  {this.props.match.params.cityName}
                </h2>
              </div>

              {/* 
                ----------------------------------------------
                                left column 
                ----------------------------------------------
                */}
              {this.props.curCityDataIsLoaded ? (
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
              ) : (
                <div className="col-sm-4 simple-details">
                  <p>Loading...</p>
                </div>
              )}

              {/* 
                  ---------------------------------------------    
                                  right column 
                  ---------------------------------------------    
                */}
              <div className="col-sm-8">
                <h3 className="ui header text-centered">
                  Weather in {this.props.match.params.cityName},
                  {this.props.match.params.countryName}
                </h3>
                {this.props.forecastDataIsLoaded ? (
                  <div className="graph-box">
                    <AreaChart
                      width={800}
                      height={400}
                      data={this.composeTemperatureGraph()}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="t"
                        stroke="#8884d8"
                        fill="#8884d8"
                        isAnimationActive={true}
                        // onAnimationEnd={console.log("end")}
                        animationDuration={1500}
                      />
                      <Area
                        type="monotone"
                        dataKey="min"
                        stroke="red"
                        fill="red"
                        isAnimationActive={true}
                        // onAnimationEnd={console.log("end")}
                        animationDuration={1500}
                      />
                      <Area
                        type="monotone"
                        dataKey="max"
                        stroke="green"
                        fill="green"
                        isAnimationActive={true}
                        // onAnimationEnd={console.log("end")}
                        animationDuration={1500}
                      />
                    </AreaChart>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
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

    //Forecasts
    forecastData: state.hendlerForecastOneLocationReduser.data,
    forecastDataLoading: state.hendlerForecastOneLocationReduser.loading,
    forecastDataIsLoaded: state.hendlerForecastOneLocationReduser.isLoaded,
    forecastDataError: state.hendlerForecastOneLocationReduser.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurWeatherOneLocation: (q) => dispatch(fetchCurWeatherOneLocation(q)),
  fetchForecastOneLocation: (q) => dispatch(fetchForecastOneLocation(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCity);
