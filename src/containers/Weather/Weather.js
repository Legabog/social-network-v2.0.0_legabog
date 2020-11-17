import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Weather.css";

import { getCoordinatesAndAddress } from "redux/weather-reducer";

import { WeatherBody, WeatherHeader } from "containers/Weather/components";
import { CirclePreloader } from "pres-components/CirclePreloader";

const Weather_ = (props) => {

  useEffect(() => {
    props.getCoordinatesAndAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"weather-wrapper"}>
      {props.weatherFetch ? (
        <CirclePreloader margin_left={"50px"} margin_top={"30px"} />
      ) : (
        <div className={"weather"}>
          <WeatherHeader {...props} />
          <WeatherBody />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  time: state.weatherReducer.time,
  date: state.weatherReducer.date,
  coordinates: state.weatherReducer.coordinates,
  address: state.weatherReducer.address,
  weatherFetch: state.weatherReducer.weatherFetch,
});

export const Weather = compose(
  withRouter,
  connect(mapStateToProps, {
    getCoordinatesAndAddress,
  })
)(Weather_);
