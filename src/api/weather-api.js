import * as axios from "axios";

export const weatherApi = {
  url: process.env.REACT_APP_WEATHER_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,
  lang: localStorage.getItem("_app-language"),
  // lang: navigator.language.slice(0, 2),

  getWeatherByCoordinates(lat, lon) {
    return axios
      .get(
        `${this.url}/weather?lat=${lat}&lon=${lon}&lang=${this.lang}&appid=${this.api_key}`
      )
      .then((response) => response.data);
  },

  getWeather5ByCoordinates(lat, lon) {
    return axios
      .get(
        `${this.url}/forecast?lat=${lat}&lon=${lon}&lang=${this.lang}&appid=${this.api_key}`
      )
      .then((response) => response.data);
  },
};
