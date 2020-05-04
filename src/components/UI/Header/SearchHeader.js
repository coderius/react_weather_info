///SearchHeader.js
///CityHeader.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BaseHeader from "./BaseHeader";
import PropTypes from "prop-types";

class SearchHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BaseHeader>
        
        <div className="col">
          <div className="color-deep-purple-lighten-5 Co-flex-container-col-center">
            <h1 className="headline-1 Co-text-center">{this.props.title}</h1>
            <h2 className="headline-2 Co-text-center">
              {this.props.desc}
                
            </h2>

            <div className="ui loading search">
                <div className="ui icon input">
                  <input
                    className="prompt Co-w24"
                    type="text"
                    placeholder="Search..."
                  />
                  <i className="circular search link icon"></i>
                </div>
                <div className="results"></div>
              </div>

          </div>
        </div>
        
      </BaseHeader>
    );
  }
}

SearchHeader.defaultProps = {
  
};

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SearchHeader;
