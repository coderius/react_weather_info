///CityHeader.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BaseHeader from "./BaseHeader";
import PropTypes from "prop-types";

class CityHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BaseHeader>
        <div className="col-sm">
          <div className="color-deep-purple-lighten-5">
            <h1 className="headline-1">{this.props.title}</h1>
            <h2 className="headline-2">
              {this.props.desc}
              <p className="headline-1">{this.props.userCity}</p>
              <small></small>
            </h2>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-sm align-self-end">
              <p className="toast toast--primary">{this.props.searchToast}</p>
              <div className="ui loading search">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search..."
                  />
                  <i className="circular search link icon"></i>
                </div>
                <div className="results"></div>
              </div>
            </div>
          </div>
        </div>
      </BaseHeader>
    );
  }
}

CityHeader.defaultProps = {
  searchToast: "Want choose another city? Search City and get weather info...",
};

CityHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  searchToast: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
};

export default CityHeader;
