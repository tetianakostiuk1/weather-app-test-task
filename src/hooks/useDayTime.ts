import { useContext } from 'react';
import { DayTimeContext } from '../context/DayTimeContext';

export const useDayTime = () => {
  const context = useContext(DayTimeContext);

  if (!context) {
    throw new Error('useDayTime must be used within DayTimeProvider');
  }

  return context;
};
