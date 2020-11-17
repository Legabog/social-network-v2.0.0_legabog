import React from "react";
import "./WeatherBodySecondaryInfo.css";

export const WeatherBodySecondaryInfo = (props) => {
  return (
    <div className={"weather-body-secondary-info-wrapper"}>
      <div className={"weather-body-secondary-info"}>
        <div className={"weather-body-secondary-info_max-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.temp_max - 273)
                : null}
            </span>
          </div>

          <div className={"weather-body-secondary-info__description"}>
            <span>Hight</span>
          </div>
        </div>
        <div className={"weather-body-secondary-info_min-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.temp_min - 273)
                : null}
            </span>
          </div>
          <div className={"weather-body-secondary-info__description"}>
            <span>Low</span>
          </div>
        </div>
        <div className={"weather-body-secondary-info_feels-like-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.feels_like - 273)
                : null}
            </span>
          </div>
          <div className={"weather-body-secondary-info__description"}>
            <span>Feels like</span>
          </div>
        </div>
      </div>
    </div>
  );
};
