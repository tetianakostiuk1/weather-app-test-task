import axios from 'axios';

export const axiosInstanceWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  timeout: 10000,
});

export const axiosInstanceGeo = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/find',
  timeout: 10000,
});

axiosInstanceWeather.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
};

axiosInstanceGeo.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
};

export default { axiosInstanceWeather, axiosInstanceGeo };
