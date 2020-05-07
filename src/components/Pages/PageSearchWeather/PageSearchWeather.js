///PageSearchWeather.js
import React, { Component } from "react";
import moment from 'moment';
import SearchHeader from "../../UI/Header/SearchHeader";
import List from "../../UI/ListContent/List";
import ListItem from "../../UI/ListContent/ListItem";
import { connect } from "react-redux";
import {
  findAllPlacesCurWeather,
  findCitiesCurWeatherReset,
} from "../../../Redux/actions/api/openweathermap/apiActions";
import { NavLink } from "react-router-dom";


class PageSearchWeather extends Component {
  static defaultProps = {
    valueSearched: "q=london&type=like&sort=population&cnt=30",
  };

  constructor(props) {
    super(props);
    this.state = {
      valueChenged: "",
      valueSearched: "",
      colorFind: false, // change color if find
    };
    this.handleChangeSearchForm = this.handleChangeSearchForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleChangeSearchForm(event) {
    // console.log(event.target.value);
    this.setState({
      valueChenged: event.target.value,
      colorFind: false,
    });
  }

  handleSearch(event, value) {
    // console.log(value);
    if (!value || value.trim() == "") {
      this.props.findCitiesCurWeatherReset(); //If click search in empty input - reset all data
    }

    if (value.length < 3) {
      return;
    }

    this.setState(
      {
        valueSearched: value,
        colorFind: true,
      },
      () => {
        let query = this.state.valueSearched;
        this.props.findAllPlacesCurWeather(query);
        // console.log("query", query);
      }
    );
  }

  transformDate(value) {
    var time = moment(value*1000).utc();
    return moment(time, "YYYYMMDD").fromNow();
  }

  colorFromTemperature(temperature) {
    let t = this.camputeRounded(temperature, 0);
    switch(true){
      case (t < 1):
        return 'blue';
      case (t < 10):
        return 'teal';
        
      case (t < 15):
        return 'green';

      case (t < 22):
        return 'olive'; 

      case (t < 30):
        return 'yellow';

      case (t < 40):
        return 'orange';

      case (t < 100):
          return 'red';
    
      default:
        return 'pink';
          
    }
  }

  camputeRounded = function(number, level = 1){
    return +number.toFixed(level);
  }

  render() {

    const list = this.props.findedCitiesCurWData.list;
    // console.log(list ? this.props.findedCitiesCurWData.list[0].coord.lat : "not load");
    return (
      <>
        <SearchHeader
          isFindLoading={this.props.findedCitiesCurWIsLoading}
          handleChangeSearchForm={this.handleChangeSearchForm}
          handleSearch={this.handleSearch}
          title="Search City..."
          desc="Search current weather and forecasts in your city"
          userCity="Kharkiv"
        />

        <section className="cities-list cities-list--finded">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-centered header-wrap-padding">
                <h2 className="headline-2 orange-darken-4 blue-grey-darken-4">
                  {this.props.findedCitiesCurWIsLoaded
                    ? "All that was found"
                    : "Find a city see the weather..."}
                </h2>
                <h2
                  className={
                    "headline-3" +
                    (this.state.colorFind
                      ? " blue-grey-darken-4"
                      : " orange-darken-4")
                  }
                >
                  {this.state.valueChenged}
                </h2>
              </div>

              <div className="col-sm-10 offset-sm-1">
                {this.props.findedCitiesCurWIsLoading ? (
                  // "Loading!"
                  <p className="col-sm">Loading...</p>
                ) : // "Loaded!"
                this.props.findedCitiesCurWIsLoaded ? (
                  this.props.findedCitiesCurWData.count > 0 ? (
                    //Result
                    //List
                      <List 
                        classes="ui relaxed divided list"
                      >
                      
                      {list.map((item, idx) => (
                        <ListItem 
                          key={idx}
                          id={item.id}
                          iconWeather={item.weather[0].icon}
                          itemName={item.name}
                          sysCountry={item.sys.country}
                          colorTemperature={this.colorFromTemperature(item.main.temp)}
                          temperatureMain={this.camputeRounded(item.main.temp, 0)}
                          temperatureMin={item.main.temp_min}
                          temperatureMax={item.main.temp_max}
                          temperatureFeels={this.camputeRounded(item.main.feels_like)}
                          weatherDescription={item.weather[0].description}
                          windSpeed={item.wind.speed}
                          dateUpdate={this.transformDate(item.dt)}
                          coordsLat={item.coord.lat}
                          coordsLon={item.coord.lon}
                        />
                      ))}
                      
                      </List>  
                  ) : (
                    //Not found
                    <p className="col-sm">Not found...</p>
                  )
                ) : (
                  //Not looking for anything yet
                  <p className="col-sm">Not looking for anything yet...</p>
                )}

                {/* {this.props.findedCitiesCurWIsLoading ? (
                  // "Ready!"
                  <p className="col-sm">Loading...</p>
                ) : this.props.findedCitiesCurWIsLoaded ? (
                  this.props.findedCitiesCurWData.count > 0 ? (
                    <div className="ui relaxed divided list">
                      
                      list.map((item, idx) => (
                      <div
                        className="col-md-4 col-sm-12 text-centered"
                        key={idx}
                      >
                        <div className="item">
                          <i className="large github middle aligned icon"></i>
                          <div className="content">
                            <a className="header">Semantic-Org/Semantic-UI</a>
                            <div className="description">
                              Updated 10 mins ago
                            </div>
                          </div>
                        </div>
                      </div>
                      ))
                    </div>
                  ) : (
                    // "Ready!"
                    <p className="col-sm">Not found...</p>
                  )
                ) : (
                  // "Ready!"
                  <p className="col-sm">Not looking for anything yet...</p>
                )} */}
              </div>
            </div>
          </div>
        </section>
        {/* <p>PageSearchWeather {this.props.match.params.city}</p> */}
      </>
    );
  }
}

//Get async state
const mapStateToProps = (state) => {
  return {
    apiCurWeatherOneCityReduser: state.apiFindCitiesCurWeatherReduser,
    findedCitiesCurWData: state.apiFindCitiesCurWeatherReduser.data,
    findedCitiesCurWIsLoading: state.apiFindCitiesCurWeatherReduser.loading,
    findedCitiesCurWIsLoaded: state.apiFindCitiesCurWeatherReduser.isLoaded,
    findedCitiesCurWError: state.apiFindCitiesCurWeatherReduser.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  findAllPlacesCurWeather: (query) => dispatch(findAllPlacesCurWeather(query)),
  findCitiesCurWeatherReset: () => dispatch(findCitiesCurWeatherReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSearchWeather);
