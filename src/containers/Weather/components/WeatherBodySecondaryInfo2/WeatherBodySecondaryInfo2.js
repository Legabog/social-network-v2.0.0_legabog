import React from "react";
import "./WeatherBodySecondaryInfo2.css";

export const WeatherBodySecondaryInfo2 = (props) => {
  return (
    <div className={"weather-body-secondary-info-2-wrapper"}>
      <div className={"weather-body-secondary-info-2"}>
        <div className={"weather-body-secondary-info-2_max-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? props.weatherToday.main.humidity
                : null}
              &nbsp;%
            </span>
          </div>

          <div className={"weather-body-secondary-info-2__description"}>
            <span>Humidity</span>
          </div>
        </div>
        <div className={"weather-body-secondary-info-2_min-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.pressure / 1.333)
                : null}
              &nbsp;mm
            </span>
          </div>
          <div className={"weather-body-secondary-info-2__description"}>
            <span>Pressure</span>
          </div>
        </div>
        <div className={"weather-body-secondary-info-2_feels-like-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.wind.speed)
                : null}
              &nbsp;m/s
            </span>
          </div>
          <div className={"weather-body-secondary-info-2__description"}>
            <span>Wind</span>
          </div>
        </div>
      </div>
    </div>
  );
};
