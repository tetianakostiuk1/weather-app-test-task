import { axiosInstanceWeather } from './axios.config';
import { WeatherData } from '../types/WeatherData';

const formatDateFromTimestampUTC = (dt: number): string => {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(dt * 1000));
};

export const getWeatherData = async (city: string) => {
  try {
    const response = await axiosInstanceWeather.get('', {
      params: {
        q: city,
      },
    });

    const { main, weather, name: cityName, sys, dt } = response.data;

    const { temp, temp_max, temp_min } = main;
    const [currentWeather] = weather;
    const { description, main: weatherMain, icon } = currentWeather;
    const { country } = sys;

    return {
      temp,
      temp_max,
      temp_min,
      description,
      weatherMain,
      icon,
      cityName,
      country,
      date: formatDateFromTimestampUTC(dt),
    } as WeatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
