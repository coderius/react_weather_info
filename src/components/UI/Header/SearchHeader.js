///SearchHeader.js

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BaseHeader from "./BaseHeader";
import PropTypes from "prop-types";

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {}

  onChange (event) {
		this.props.handleChangeSearchForm(event);
  }
  
  onSearch (event) {
    event.preventDefault();
    let value = this.input.current.value;
    this.props.handleSearch(event, value);
  }

  render() {
    return (
      <BaseHeader>
        
        <div className="col">
          <div className="color-deep-purple-lighten-5 Co-flex-container-col-center">
            <h1 className="headline-1 Co-text-center">{this.props.title}</h1>
            <h2 className="headline-2 Co-text-center">
              {this.props.desc}
                
            </h2>

            <div className={`ui search ${this.props.isFindLoading ? 'loading' : ''}`}>
                <div className="ui icon input">
                  <input
                    onChange={ this.onChange }
                    ref={this.input}
                    className="prompt Co-w24"
                    type="text"
                    placeholder="Search..."
                    maxLength="50"
                  />
                  <i 
                  onClick={ this.onSearch }
                  className="circular search link icon">
                  </i>
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
