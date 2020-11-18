import React from "react";
import { useTranslation } from "react-i18next";
import "./WeatherBodySecondaryInfo.css";

export const WeatherBodySecondaryInfo = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"weather-body-secondary-info-wrapper"}>
      <div className={"weather-body-secondary-info"}>
        <div className={"weather-body-secondary-info_max-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.temp_max - 273)
                : null}
            </span>
            <p>
              <sup>o</sup>
            </p>
          </div>

          <div className={"weather-body-secondary-info__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info.item-1")}
            </span>
          </div>
        </div>
        <div className={"weather-body-secondary-info_min-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.temp_min - 273)
                : null}
            </span>
            <p>
              <sup>o</sup>
            </p>
          </div>
          <div className={"weather-body-secondary-info__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info.item-2")}
            </span>
          </div>
        </div>
        <div className={"weather-body-secondary-info_feels-like-temperature"}>
          <div className={"weather-body-secondary-info__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.feels_like - 273)
                : null}
            </span>
            <p>
              <sup>o</sup>
            </p>
          </div>
          <div className={"weather-body-secondary-info__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info.item-3")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
