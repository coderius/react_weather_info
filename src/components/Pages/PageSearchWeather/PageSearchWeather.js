///PageSearchWeather.js
import React, { Component } from "react";
import SearchHeader from "../../UI/Header/SearchHeader";
import { connect } from "react-redux";
import {
  findAllPlacesCurWeather,
  findCitiesCurWeatherReset,
} from "../../../Redux/actions/api/openweathermap/apiActions";

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
        let query = `q=${this.state.valueSearched}&type=like&sort=population&cnt=30`;
        this.props.findAllPlacesCurWeather(query);
        console.log("query", query);
      }
    );
  }

  render() {

    const list = this.props.findedCitiesCurWData.list;

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
                    
                      <div className="ui relaxed divided list">
                      {list.map((item, idx) => (
                        <div
                          className="item"
                          key={idx}
                        >
                          <i className="large github middle aligned icon"></i>
                          <div className="content">
                            <a className="header">{item.name}, {item.sys.country}</a>
                            <div className="description">
                              Updated 10 mins ago
                            </div>
                          </div>
                          
                        </div>
                      ))}
                      </div>
                    
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
