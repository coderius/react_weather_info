///WeatherList
import React, { Component } from "react";
import MainHeader from "../../UI/MainHeader/MainHeader";
import Map from "../../UI/Map/Map";
import SeveralCitiesBlockContainer from "../../Containers/SeveralCitiesBlockContainer/SeveralCitiesBlockContainer";

class WeatherCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header: {
        title: "WEATHER INFO",
        desc: "Get a weather forecast for Your city ...",
        buttonText: "More info",
      },
      SeveralCitiesBlockContainer: {
        cityIds: "5128581,2643743,2988507,1850147,3128760,706483", // string set to api request New York, London, Paris, Tokyo, Barcelona, Kharkiv
        blockHeaderFirst: "Current weather",
        blockHeaderSecond: "In popular Cities",
      },
    };
  }

  render() {
    return (
      <>
        <div className="bg-shape-1--r" style={{left: 40+'%'}}></div>
        <MainHeader
          title={this.state.Header.title}
          desc={this.state.Header.desc}
          buttonText={this.state.Header.buttonText}
        />
        <div className="bg-shape-1--r" style={{left: 20+'%'}}></div>
        <SeveralCitiesBlockContainer
          blockHeaderFirst={
            this.state.SeveralCitiesBlockContainer.blockHeaderFirst
          }
          blockHeaderSecond={
            this.state.SeveralCitiesBlockContainer.blockHeaderSecond
          }
          cityIds={this.state.SeveralCitiesBlockContainer.cityIds}
        />
        
        <Map />  

        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-centered header-wrap-padding">
              <h2 className="headline-3 blue-grey-darken-4">
                Curreant weather in the World
              </h2>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <table className="ui celled padded table selectable">
                    <thead>
                      <tr>
                        <th className="single line">Evidence Rating</th>
                        <th>Effect</th>
                        <th>Efficacy</th>
                        <th>Consensus</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="ui center aligned header">A</h2>
                        </td>
                        <td className="single line">Power Output</td>
                        <td>
                          <div
                            className="ui star rating"
                            data-rating="3"
                            data-max-rating="3"
                          ></div>
                        </td>
                        <td className="right aligned">
                          80%
                          <a href="#">18 studies</a>
                        </td>
                        <td>
                          Creatine supplementation is the reference compound for
                          increasing muscular creatine levels; there is
                          variability in this increase, however, with some
                          nonresponders.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="ui center aligned header">A</h2>
                        </td>
                        <td className="single line">Weight</td>
                        <td>
                          <div
                            className="ui star rating"
                            data-rating="3"
                            data-max-rating="3"
                          ></div>
                        </td>
                        <td className="right aligned">
                          100%
                          <a href="#">65 studies</a>
                        </td>
                        <td>
                          Creatine is the reference compound for power
                          improvement, with numbers from one meta-analysis to
                          assess potency
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan="5">
                          <div className="ui right floated pagination menu">
                            <a className="icon item">
                              <i className="left chevron icon"></i>
                            </a>
                            <a className="item">1</a>
                            <a className="item">2</a>
                            <a className="item">3</a>
                            <a className="item">4</a>
                            <a className="icon item">
                              <i className="right chevron icon"></i>
                            </a>
                          </div>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherCommon;
