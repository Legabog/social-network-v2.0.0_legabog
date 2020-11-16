import * as axios from "axios";

export const weatherApi = {
  url: process.env.REACT_APP_WEATHER_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,

  getWeatherByCoordinates(lat, lon) {
    return axios
      .get(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}`
      )
      .then((data) => console.log(data));
  },
};
