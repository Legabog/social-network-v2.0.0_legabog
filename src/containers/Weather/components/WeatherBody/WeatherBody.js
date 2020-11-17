import React from "react";
import "./WeatherBody.css";

import { WeatherBodyMainBlock } from "containers/Weather/components/WeatherBodyMainBlock";

export const WeatherBody = (props) => {
  return (
    <div className={"weather-body"}>
      <WeatherBodyMainBlock {...props}/>
    </div>
  );
};
