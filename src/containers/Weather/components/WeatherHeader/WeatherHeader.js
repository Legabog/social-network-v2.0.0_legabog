import React from "react";
import { useTranslation } from "react-i18next";
import "./WeatherHeader.css";

export const WeatherHeader = (props) => {
  console.log(props)
  const { t } = useTranslation();

  const getDate = () => {
    return `${new Date().getMonth()} ${new Date().getDate()},
    ${new Date().getFullYear()} | ${new Date().getDay()}`;
  };

  // const getAddress = () => {
  //   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=59.9237953&lon=30.460061999999997&zoom=18&addressdetails=1`
  //   Axios.get(url).then((data) => console.log(data))
  // }

  // const getWeather = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=59.9237953&lon=30.460061999999997&appid=d1c9bbbc2c7ec4484d8e6eea33cd4913`
  //   Axios.get(url).then((data) => console.log(data))
  // }

  return (
    <div className={"weather-header"}>
      <div className={"weather-header__title"}>
        <h2>{props.address.city}, {props.address.country}</h2>
        <h3>{getDate()}</h3>
      </div>
    </div>
  );
};
