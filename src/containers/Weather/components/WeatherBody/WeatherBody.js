import React from "react";
import "./WeatherBody.css";

import { WeatherBodyMainBlock } from "containers/Weather/components/WeatherBodyMainBlock";
import { WeatherBodyForecastBlock } from "containers/Weather/components/WeatherBodyForecastBlock";

export const WeatherBody = (props) => {
  return (
    <div className={"weather-body"}>
      <WeatherBodyMainBlock {...props} />
      <WeatherBodyForecastBlock {...props} />
    </div>
  );
};
