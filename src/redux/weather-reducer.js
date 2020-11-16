import { addressApi } from "api/address-api";

const WEATHER_SET_COORDINATES = "WEATHER_SET_COORDINATES";
const WEATHER_SET_ADDRESS = "WEATHER_SET_ADDRESS";
const WEATHER_TOGGLE_FETCH = "WEATHER_TOGGLE_FETCH";

let initialState = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
  address: null,
  weatherFetch: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_SET_COORDINATES:
      return {
        ...state,
        coordinates: {
          latitude: action.latitude,
          logitude: action.longitude,
        },
      };
    case WEATHER_SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case WEATHER_TOGGLE_FETCH:
      return {
        ...state,
        weatherFetch: action.boolean,
      };
    default:
      return state;
  }
};

export const toggleWeatherFetch = (boolean) => {
  return {
    type: WEATHER_TOGGLE_FETCH,
    boolean,
  };
};

export const setCoorginates = (latitude, longitude) => {
  return {
    type: WEATHER_SET_COORDINATES,
    latitude,
    longitude,
  };
};

export const setAddress = (address) => {
  return {
    type: WEATHER_SET_ADDRESS,
    address,
  };
};

export const getCoordinatesAndAddress = () => {
  return async (dispatch) => {
    dispatch(toggleWeatherFetch(true));
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const { latitude, longitude } = pos.coords;

      dispatch(setCoorginates(latitude, longitude));
      addressApi
        .getAddressByCoordinates(latitude, longitude)
        .then((response) => dispatch(setAddress(response)))
        .catch((e) => console.log(e))
        .finally(() => dispatch(toggleWeatherFetch(false)));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
};

export default weatherReducer;
