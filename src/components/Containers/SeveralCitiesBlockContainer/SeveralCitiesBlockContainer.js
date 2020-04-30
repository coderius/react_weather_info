///SeveralCitiesBlockContainer.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetch_data } from "../../../Redux/actions/api/apiActions";

class SeveralCitiesBlockContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch_data("524901,703448,2643743");
  }

  componentWillUnmount() {}

  render() {
    const {list} = this.props.citiesData;
    console.log("apiReduser",this.props.apiReduser);
    
    return (
      <div className="several-cities-block">
        <h1>{this.props.header}</h1>
        <ul>
            {
                this.props.citiesDataIsLoaded
                    ?
                    list.map((item, idx) => (
                        <li key={idx}>
                            {item.name}
                        </li>
                    ))
                
                    // "Ready!"
                    :
                    "Loading..."
                    
                    
            }
        </ul>
      </div>
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
