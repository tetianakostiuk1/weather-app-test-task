import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { WeatherProvider } from './context/WeatherContext';
import { DayTimeProvider } from './context/DayTimeContext';

import '../src/styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DayTimeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </DayTimeProvider>
  </React.StrictMode>
);
