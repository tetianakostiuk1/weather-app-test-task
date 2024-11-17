import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from 'react';

import { getWeatherData } from '../api/weatherApi';
import { WeatherData } from '../types/WeatherData';

interface WeatherContextType {
  weatherData: WeatherData | null;
  fetchWeatherData: (x: string) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};
export const WeatherProvider: FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (city = 'Tokyo') => {
    try {
      const data = await getWeatherData(city);

      if (data) {
        setWeatherData(data);
      }
    } catch (e) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    weatherData && (
      <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
        {children}
      </WeatherContext.Provider>
    )
  );
};
