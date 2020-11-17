import { WeatherBlockForecastItem } from "containers/Weather/components/WeatherBlockForecastItem";
import React from "react";
import _ from "lodash/core";
import "./WeatherBodyForecastBlock.css";

export const WeatherBodyForecastBlock = (props) => {
  return (
    <div className={"weather-body-forecast-block"}>
      <div className={"weather-body-forecast-block__title"}>
        <span>Forecast</span>
      </div>
      <div className={"weather-body-forecast-block__slider"}>
        {props.forecast5Days !== null
          ? props.forecast5Days.map((e) => {
              return (
                <WeatherBlockForecastItem
                  key={_.uniqueId(e)}
                  date={`${e.dt_txt.slice(8, 10)}.${e.dt_txt.slice(5, 7)}`}
                  time={`${e.dt_txt.slice(11, 16)}`}
                  image={e.weather[0].icon}
                  temperature={Math.round(e.main.temp - 273)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
