import React from "react";
import "./WeatherBodyWeatherImage.css";

export const WeatherBodyWeatherImage = (props) => {
  return (
    <div className={"weather-body-weather-image"}>
      <img
        src={`http://openweathermap.org/img/wn/${
          props.weatherToday !== null
            ? props.weatherToday.weather[0].icon
            : "10d"
        }@4x.png`}
        alt={"description"}
      />
    </div>
  );
};
