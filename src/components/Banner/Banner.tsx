import React, { FC } from 'react';

import { useDayTime } from '../../hooks/useDayTime';
import Search from '../Search/Search';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import s from './Banner.module.scss';

const Banner: FC = () => {
  const { dayNightClass } = useDayTime();

  return (
    <div className={`${s.bannerBackground} ${s[dayNightClass]}`}>
      <Search />
      <WeatherWidget />
    </div>
  );
};

export default Banner;
