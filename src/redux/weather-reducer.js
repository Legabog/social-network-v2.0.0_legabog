import { addressApi } from "api/address-api";

const WEATHER_SET_COORDINATES = "WEATHER_SET_COORDINATES";
const WEATHER_SET_ADDRESS = "WEATHER_SET_ADDRESS";
const WEATHER_SET_DATE = "WEATHER_SET_DATE";
const WEATHER_TOGGLE_FETCH = "WEATHER_TOGGLE_FETCH";

let initialState = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
  address: null,
  weatherFetch: false,
  date: {
    day: null,
    dayOfWeek: null,
    month: null,
    year: null,
  },
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
    case WEATHER_SET_DATE:
      return {
        ...state,
        date: {
          month: action.month,
          day: action.day,
          dayOfWeek: action.dayOfWeek,
          year: action.year,
        },
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

export const setDate = (day, dayOfWeek, month, year) => {
  return {
    type: WEATHER_SET_DATE,
    day,
    dayOfWeek,
    month,
    year,
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
    const date = new Date();

    dispatch(toggleWeatherFetch(true));

    dispatch(
      setDate(
        date.getDate(),
        date.getDay() - 1,
        date.getMonth(),
        date.getFullYear()
      )
    );

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

  // const [time, setTime] = useState({
  //   hours: date.getHours(),
  //   minutes: date.getMinutes(),
  //   seconds: date.getSeconds(),
  // });

  // useEffect(() => {
  //   const upd = setInterval(() => {
  //     setTime({
  //       hours: date.getHours(),
  //       minutes: date.getMinutes(),
  //       seconds: date.getSeconds(),
  //     });
  //   }, 1000);

  //   return () => clearInterval(upd);
  // }, [date]);

  // const getAddress = () => {
  //   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=59.9237953&lon=30.460061999999997&zoom=18&addressdetails=1`
  //   Axios.get(url).then((data) => console.log(data))
  // }

  // const getWeather = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=59.9237953&lon=30.460061999999997&appid=d1c9bbbc2c7ec4484d8e6eea33cd4913`
  //   Axios.get(url).then((data) => console.log(data))
  // }

export default weatherReducer;
