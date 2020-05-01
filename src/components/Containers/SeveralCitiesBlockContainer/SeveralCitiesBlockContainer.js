///SeveralCitiesBlockContainer.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetch_data } from "../../../Redux/actions/api/openweathermap/apiActions";
import Card from "../../UI/Card/Card";

//More info
const windSpeedClass = {
  '0'	   : ['<1', 'Calm'],
  '1'	   : ['1-5', 'Light' ],
  '2'	   : ['6-11', 'Light'],
  '3'    : ['12-19', 'Gentle'],
  '4'	   : ['20-28', 'Moderate'],
  '5'	   : ['29-38', 'Fresh'],
  '6'    : ['39-49', 'Strong'],
  '9'	   : ['75-88', 'Stong'],
  '7'	   : ['50-61',	'Fresh'],
  '8'	   : ['62-74',	'Fresh'],
  '10'   : ['89-102',	'Whole'],
  '11'   : ['103-117', 'Storm'],
  '12-17': ['>117',	'Hurricane'],
};

class SeveralCitiesBlockContainer extends Component {
  static defaultProps = {
    cityIds: "524901,703448,2643743", // string set to api request
    blockHeaderFirst: "Current weather",
    blockHeaderSecond: "In the World",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch_data(this.props.cityIds);
  }

  componentWillUnmount() {}

  //Speed number to string
  camputeBreeze(speedNumber) {
    let s = Math.round(speedNumber);
    s = s < 12 ? s : '12-17';
    let find = windSpeedClass[s];
    let res = find ? find[1] : "wind:"+ s;
    return res;
  }

  camputeRounded = function(number, level = 1){
      return +number.toFixed(level);
  }

  render() {
    const { list } = this.props.citiesData;
    // console.log("apiReduser", this.props.apiReduser);

    return (
      <>
        <section id="cities-block-widgets">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-centered header-wrap-padding">
                <h2 className="headline-2 orange-darken-4 blue-grey-darken-4">
                  {this.props.blockHeaderFirst}
                </h2>
                <h2 className="headline-3 blue-grey-darken-4">
                  {this.props.blockHeaderSecond}
                </h2>
                {/* <p className="lead">
                  Over 800 pre-made website layouts come packaged right inside
                  of Divi for free. Brand new layouts are added weekly along
                  with royalty free photos, icons, and illustrations.{" "}
                  <a href="https://www.elegantthemes.com/documentation/divi/premade-layouts/">
                    Learn How They Work!
                  </a>
                </p> */}
                </div>
                <div className="col-sm-12">
                  <div className="row">
                  {this.props.citiesDataIsLoaded
                    ? list.map((item, idx) => (
                        <div className="col-md-4 col-sm-12 text-centered" key={idx}>
                            
                            {/* Card */}
                            <Card 
                              lead={item.name} 
                              sysCountry={item.sys.country} 
                              icon={item.weather[0].icon} 
                              temperature={this.camputeRounded(item.main.temp)}
                              weatherDescription={item.weather[0].description}
                              weatherMain={item.weather[0].main}
                              windSpeed={item.wind.speed}
                              windSpeedName={this.camputeBreeze(item.wind.speed)}
                              mainPressure={item.main.pressure}
                              mainHumidity={item.main.humidity}
                              mainFeelsLike={this.camputeRounded(item.main.feels_like, 0)}
                              href={"/"}
                            />
                            {/* Card */}
                            
                        </div>
                      ))
                    : 
                    // "Ready!"
                      <p className="col-sm">Loading...</p>}
                </div>
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
    apiReduser: state.apiReduser,
    citiesData: state.apiReduser.data,
    citiesDataIsLoaded: state.apiReduser.isLoaded,
    citiesDataError: state.apiReduser.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetch_data: (id) => dispatch(fetch_data(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeveralCitiesBlockContainer);
