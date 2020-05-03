///BaseHeader.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class BaseHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <header className="main-header gallery-hero">
        <div className="container">
          <div className="row">{this.props.children}</div>
        </div>
      </header>
    );
  }
}

export default BaseHeader;
