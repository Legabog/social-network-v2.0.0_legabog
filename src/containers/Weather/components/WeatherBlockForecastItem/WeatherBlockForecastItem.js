import React from "react";
import "./WeatherBlockForecastItem.css";

export const WeatherBlockForecastItem = (props) => {
  return (
    <div className={"weather-block-forecast-item-wrapper"}>
      <div className={"weather-block-forecast-item"}>
        <div className={"weather-block-forecast-item-header"}>
          <div className={"weather-block-forecast-item-date"}>
            <span>{props.date}</span>
          </div>
          <div className={"weather-block-forecast-item-time"}>
            <span>{props.time}</span>
          </div>
        </div>
        <div className={"weather-block-forecast-item-body"}>
          <div className={"weather-block-forecast-item-image"}>
            <img
              src={`http://openweathermap.org/img/wn/${props.image}.png`}
              alt={"description"}
            />
          </div>
          <div className={"weather-block-forecast-item-temperature"}>
            <span>{props.temperature}</span>
            <p>
              <sup>o</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
