import React, { FC } from 'react';
import s from './WeatherWidget.module.scss';
import { WeatherData } from '../../types/WeatherData';
import { useWeather } from '../../hooks/useWeather';

const WeatherWidget: FC = () => {
  const { weatherData } = useWeather();

  const {
    icon,
    temp,
    weatherMain,
    description,
    cityName,
    country,
    date,
    temp_min,
    temp_max,
  } = weatherData as WeatherData;

  const getWeatherIconUrl = (iconCode?: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatTemperature = (temp: number) => `${temp.toFixed(0)}°C`;

  if (!weatherData) {
    return null;
  }

  return (
    <div id="weather-widget" className={s.container}>
      <div className={s.weatherInfo}>
        <div className={s.weatherDetails}>
          <img
            src={getWeatherIconUrl(icon)}
            className={s.icon}
            alt="weather icon"
          ></img>

          <div className={s.details}>
            <span className={s.temperature}>{formatTemperature(temp)}</span>
            <span className={s.main}>{weatherMain}</span>
            <span className={s.description}>{description}</span>
          </div>
        </div>

        <div className={s.otherDetails}>
          <span className={s.city}>
            {cityName}, {country}
          </span>

          <span className={s.date}>{date}</span>
        </div>
      </div>

      <hr className={s.horizontalLine} />

      <div className={s.minMaxTemperature}>
        <div className={s.min}>
          <span className={s.temperatureTitle}>Min</span>
          <span className={s.temperature}>{formatTemperature(temp_min)}</span>
        </div>

        <hr className={s.verticalLine} />

        <div className={s.max}>
          <span className={s.temperatureTitle}>Max</span>
          <span className={s.temperature}>{formatTemperature(temp_max)}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
