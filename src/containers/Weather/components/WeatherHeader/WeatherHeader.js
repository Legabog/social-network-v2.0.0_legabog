import React from "react";
import "./WeatherHeader.css";

import { WeatherHeaderPlace } from "containers/Weather/components/WeatherHeaderPlace";
import { WeatherHeaderDate } from "containers/Weather/components/WeatherHeaderDate";
import { WeatherHeaderTime } from "containers/Weather/components/WeatherHeaderTime";

export const WeatherHeader = (props) => {
  return (
    <div className={"weather-header"}>
      <WeatherHeaderPlace {...props} />
      <hr />
      <div className={"weather-header_block"}>
        <WeatherHeaderDate {...props} />
        <WeatherHeaderTime {...props} />
      </div>
    </div>
  );
};
