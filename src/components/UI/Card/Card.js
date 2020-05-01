import React from "react";

const Card = (props) => {
    
  return (
    <div className="card blue-grey-darken-4 link-wrap-box">
      <a className="link-wrap" href={props.href}></a>
      <div className="card__header">
  <p className="card__lead"><span className="orange-darken-4" style={{fontWeight:400}}>Weather for</span> {props.lead},{props.sysCountry}</p>
      </div>

      <div className="row card__content">
        <div className="col-md-6 col-sm-12">
          <img
            src={"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + props.icon + ".png"}
            alt="Weather in London, GB"
            className="responsive-img"
          />
        </div>
        <div className="col-md-6 col-sm-12 card__item-col">
          <p className="card__number">
            {props.temperature}<span className="card__degree">°C</span>
          </p>
          <span className="card__rising text-lowercase">and {props.weatherMain}</span>
        </div>
        <div className="col-sm-12">
          <p className="card__means capitalize-text">{props.weatherDescription}</p>
          <p className="card__data-row">Wind: {props.windSpeed} m/s | {props.windSpeedName}</p>
          <p className="card__data-row">Pressure: {props.mainPressure} mb | Humidity: {props.mainHumidity} %</p>
        </div>
      </div>

      <div className="card__footer">Feel like {props.mainFeelsLike} °C</div>
    </div>
  );
};

export default Card;
