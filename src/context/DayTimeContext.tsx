import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';

type DayTimeContextType = {
  isDay: boolean;
  dayNightClass: string;
};

export const DayTimeContext = createContext<DayTimeContextType | null>(null);

export const DayTimeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDay, setIsDay] = useState<boolean>(false);

  useEffect(() => {
    const hours = new Date().getHours();
    setIsDay(hours >= 6 && hours < 21);
  }, []);

  const dayNightClass = isDay ? 'day' : 'night';

  return (
    <DayTimeContext.Provider value={{ isDay, dayNightClass }}>
      {children}
    </DayTimeContext.Provider>
  );
};
