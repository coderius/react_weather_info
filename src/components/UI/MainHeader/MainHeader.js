import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main-header gallery-hero section">
        <div className="row-container narrow">
          <div className="row center-align-columns">
            <div className="column-container column-7 retain-width-on-mobile">
              <div className="column color-deep-purple-lighten-5">
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
            <div className="column-container">
              <div className="column">
                <a
                  className="video-popup"
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
              </div>
            </div>
          </div>
        </div>
    </header>
    );
  }
}

export default MainHeader;
