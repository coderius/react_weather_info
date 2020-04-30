import React from "react";

const Card = (props) => {
    console.log(props.icon);
  return (
    <div className="card blue-grey-darken-4">
      <a className="link-wrap" href="/"></a>
      <div className="card__header">
  <p className="card__lead">Weather for {props.lead},{props.sysCountry}</p>
      </div>

      <div className="row card__content">
        <div className="col-sm">
          <img
            src={"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + props.icon + ".png"}
            width="128"
            height="128"
            alt="Weather in London, GB"
            className=""
          />
        </div>
        <div className="col-sm card__item-col">
          <p className="card__number">
            13<span className="card__degree">°C</span>
          </p>
          <span className="card__rising">and rising</span>
        </div>
        <div className="col-sm-12">
          <p className="card__means">broken clouds</p>
          <p className="card__wind">Wind: 7.2 m/s Moderate breeze</p>
        </div>
      </div>

      <div className="card__footer">footer</div>
    </div>
  );
};

export default Card;
