import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main-header gallery-hero">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="color-deep-purple-lighten-5">
                    <h1 className="headline-1">{this.props.title}</h1>
                    <h2 className="headline-2">
                        {this.props.desc}
                    </h2>
                
                <a
                  className="button button--primary"
                  target="_blank"
                  href="https://www.elegantthemesdemo.com/?et_fb=1"
                >
                  <span>{this.props.buttonText}</span>
                </a>
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                <a
                  className="video-popup col-sm"
                  href="https://www.youtube.com/watch?v=q9XI0Lo-SWE"
                >
                  <div className="play-button-container">
                    <div className="play-button">
                      <svg>
                        <polygon points="10 33 10 1 34 17"></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="col-sm align-self-end">
                  <p className="toast toast--primary">How it works. Short video.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
    );
  }
}

export default MainHeader;
