import React, { FC, useEffect, useState } from 'react';

import { useWeather } from '../../hooks/useWeather';
import s from './PopularCities.module.scss';

import newYorkImage from '../../assets/images/new-york.png';
import londonImage from '../../assets/images/london.png';
import dubaiImage from '../../assets/images/dubai.png';
import parisImage from '../../assets/images/paris.png';

const popularCities = [
  {
    name: 'New York',
    cityCode: 'New York,us',
    imagePath: newYorkImage,
  },
  {
    name: 'London',
    cityCode: 'London,gb',
    imagePath: londonImage,
  },
  {
    name: 'Dubai',
    cityCode: 'Dubai,ae',
    imagePath: dubaiImage,
  },
  {
    name: 'Paris',
    cityCode: 'Paris,fr',
    imagePath: parisImage,
  },
];

const PopularCities: FC = () => {
  const { fetchWeatherData } = useWeather();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity);

      document
        .getElementById('weather-widget')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCity]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>
        Check the weather in most popular cities in the world
      </h2>

      <div className={s.cityCards}>
        {popularCities.map((city) => (
          <div
            key={city.cityCode}
            className={s.card}
            style={{ backgroundImage: `url(${city.imagePath})` }}
            onClick={() => setSelectedCity(city.name)}
          >
            <div className={s.cityName}>{city.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
