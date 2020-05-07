///ListItem.js
import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = (props) => (
  <div className="item">
    <img
    // Weather icon 
      src={`//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${props.iconWeather}.png`}
      
      alt={`Weather in ${props.itemName}, ${props.sysCountry}`}
      className="ui bottom aligned tiny image"
    />
    <div className="content">
      <h3 className="ui header">
        {/* Link to city info */}
        <NavLink
          to={`/weather/country/${props.sysCountry}/city/${props.itemName}/city-id/${props.id}`}
          exact={true}
          className=""
        >
          {props.itemName}
        </NavLink>
        , &nbsp;
        {/* Country name */}
        <NavLink
          to={`/weather/country/${props.sysCountry}`}
          exact={true}
          className=""
        >
          {props.sysCountry}
        </NavLink>
        &nbsp;
        {/* flag by https://semantic-ui.com/elements/flag.html*/}
        <NavLink
          to={`/weather/country/${props.sysCountry}`}
          exact={true}
          className=""
        >
          <i className={props.sysCountry.toLowerCase() + " flag"}></i>
          {/* <img className="ui aligned mini image Co-w1_5 Co-v-align-base" src={"http://openweathermap.org/images/flags/" + props.sysCountry.toLowerCase() + ".png"} /> */}
        </NavLink>
      </h3>

      <div className="description">
        <strong>Temperature </strong>
        <span
          className={`ui label tiny circular ${props.colorTemperature}`}
        >
          {props.temperatureMain} °C
        </span>
        <span className="">
          {" "}
          | <strong>Min t:</strong> {props.temperatureMin} °C
        </span>
        <span className="">
          {" "}
          | <strong>Max t:</strong> {props.temperatureMax} °C
        </span>
        <span className="">
          {" "}
          | <strong>°t feels like:</strong>{" "}
          {props.temperatureFeels} °C
        </span>
      </div>
      <div className="description">
        <span className="">
          {" "}
          | <strong>Weather:</strong> {props.weatherDescription}
        </span>
        <span className="">
          <strong>Wind speed:</strong> {props.windSpeed} m/s
        </span>
        &nbsp;&nbsp;
        <span className="ui mini label olive basic">
          <i className="clock outline icon"></i>
          Updated at:{props.dateUpdate}
        </span>
      </div>
      <div className="description">
        <strong>Geo coords</strong> -{" "}
        <span className="orange">
          (lat: <em>{props.coordsLat}</em>| lon: <em>{props.coordsLon}</em>)
        </span>
      </div>
    </div>
  </div>
);

export default ListItem;
