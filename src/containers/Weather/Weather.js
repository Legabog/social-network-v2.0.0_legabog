import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Weather.css";

import { WeatherBody, WeatherHeader } from "containers/Weather/components";
import { getCoordinatesAndAddress } from "redux/weather-reducer";

import { CirclePreloader } from "pres-components/CirclePreloader";

const Weather_ = (props) => {
  useEffect(() => {
    props.getCoordinatesAndAddress();
  }, []);

  return (
    <div className={"weather-wrapper"}>
      {props.weatherFetch ? (
        <CirclePreloader margin_left={"50px"} margin_top={"30px"}/>
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
