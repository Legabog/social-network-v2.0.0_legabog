import React from "react";
import "./WeatherSwitcherTemperature.css";

export const WeatherSwitcherTemperature = (props) => {
  return (
    <div className={"weather-switcher-temperature"}>
      <div className={"weather-switcher-temperature__item"}>
        <span>F</span>
      </div>

      <div className={"weather-switcher-temperature__item"}>
        <span> C</span>
      </div>

      <div className={"weather-switcher-temperature__item"}>
        <span>K</span>
      </div>
    </div>
  );
};
