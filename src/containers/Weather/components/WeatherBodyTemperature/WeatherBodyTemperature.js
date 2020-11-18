import React from "react";
import "./WeatherBodyTemperature.css";
import { WeatherSwitcherTemperature } from "containers/Weather/components/WeatherSwitcherTemperature";

export const WeatherBodyTemperature = (props) => {
  return (
    <div className={"weather-body-temperature"}>
      <div className={"weather-body-temperature__block-1"}>
        <div className={"weather-body-temperature__span"}>
          <span>
            {props.weatherToday !== null
              ? Math.round(props.weatherToday.main.temp - 273)
              : null}
          </span>
        </div>
        <div className={"weather-body-temperature__sup"}>
          <p>
            <sup>o</sup>
          </p>
        </div>
        <WeatherSwitcherTemperature />
      </div>
      <div className={"weather-body-temperature__block-2"}>
        <div className={"weather-body-temperature__description"}>
        <span>
            {props.weatherToday !== null
              ? props.weatherToday.weather[0].description[0].toUpperCase() + props.weatherToday.weather[0].description.slice(1,)
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};
