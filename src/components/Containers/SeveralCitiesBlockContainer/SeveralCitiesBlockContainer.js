///SeveralCitiesBlockContainer.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetch_data } from "../../../Redux/actions/api/apiActions";
import Card from "../../UI/Card/Card";

class SeveralCitiesBlockContainer extends Component {
  static defaultProps = {
    cityIds: "524901,703448,2643743", // string set to api request
    blockHeader: "Current weather in the World",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch_data(this.props.cityIds);
  }

  componentWillUnmount() {}

  render() {
    const { list } = this.props.citiesData;
    console.log("apiReduser", this.props.apiReduser);

    return (
      <>
        <section id="cities-block-widgets">
          <div className="row-container">
            <div className="row">
              <div className="col-sm text-centered">
                <h2 className="headline-3 blue-grey-darken-4">
                  800+ Pre-made Designs
                </h2>
                <h2 className="headline-2 orange-darken-4">
                  100+ Full Website Packs
                </h2>
                <p className="lead">
                  Over 800 pre-made website layouts come packaged right inside
                  of Divi for free. Brand new layouts are added weekly along
                  with royalty free photos, icons, and illustrations.{" "}
                  <a href="https://www.elegantthemes.com/documentation/divi/premade-layouts/">
                    Learn How They Work!
                  </a>
                </p>
                <div className="row">
                  {this.props.citiesDataIsLoaded
                    ? list.map((item, idx) => (
                        <div className="col-sm text-centered" key={idx}>
                          
                            {/* Card */}
                            <Card 
                              lead={item.name} 
                              sysCountry={item.sys.country} 
                              icon={item.weather[0].icon} 
                              href={"/"}
                            />
                            {/* Card */}
                          
                        </div>
                      ))
                    : // "Ready!"
                      "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="several-cities-block">
          <h1>{this.props.blockHeader}</h1>
          <ul></ul>
        </div>
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
