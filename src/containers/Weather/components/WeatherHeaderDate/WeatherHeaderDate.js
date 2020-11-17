import React from "react";
import { useTranslation } from "react-i18next";
import "./WeatherHeaderDate.css";

import TodayIcon from "@material-ui/icons/Today";

export const WeatherHeaderDate = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"weather-header__date"}>
      <TodayIcon />
      <span>
        {t(`authorized.weather.day-of-week.${props.date.dayOfWeek}`)},{" "}
        {t(`authorized.weather.month.${props.date.month}`)} {props.date.day},{" "}
        {props.date.year}
      </span>
    </div>
  );
};
