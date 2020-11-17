import React from "react";
import { useTime } from "hooks/useTime";
import "./WeatherHeaderTime.css";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

export const WeatherHeaderTime = (props) => {
  const [hours, minutes, seconds] = useTime();

  return (
    <div className={"weather-header__time"}>
      <AccessTimeIcon />
      <span>
        {hours < 10 ? "0" : null}
        {hours}:{minutes < 10 ? "0" : null}
        {minutes}:{seconds < 10 ? "0" : null}
        {seconds}
      </span>
    </div>
  );
};
