import React, { FC, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import s from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/loupe.svg';

import { getSuggestions } from '../../api/autoCompleteApi';
import { useWeather } from '../../hooks/useWeather';
import { useDayTime } from '../../hooks/useDayTime';

const Search: FC = () => {
  const { fetchWeatherData } = useWeather();
  const { dayNightClass } = useDayTime();

  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSuggestions = useCallback(
    debounce(async (query: string) => {
      const response = await getSuggestions(query);

      setSuggestions(response);
      setIsOpen(true);
    }, 500),
    []
  );

  useEffect(() => {
    if (query.trim().length > 2) {
      fetchSuggestions(query);
    } else {
      setIsOpen(false);
      setSuggestions([]);
    }
  }, [query, fetchSuggestions]);

  const handleSelect = (city: string) => {
    fetchWeatherData(city);
    setSuggestions([]);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className={s.inputWrapper}>
      <input
        type="text"
        className={s.input}
        placeholder="Start typing to search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>

      {isOpen && (
        <ul className={s.suggestions}>
          {suggestions.length > 0 ? (
            suggestions.map(({ name, country }) => (
              <li
                key={`${name}-${country}`}
                onClick={() => handleSelect(`${name}, ${country}`)}
                className={`${s.suggestionsItem} ${s[dayNightClass]}`}
              >
                {name}, {country}
              </li>
            ))
          ) : (
            <li className={s.noSuggestions}>
              City not found, please try to change your search query
            </li>
          )}
        </ul>
      )}
      <span className={`${s.iconWrapper} ${s[dayNightClass]}`}>
        <SearchIcon className={s.icon} />
      </span>
    </div>
  );
};

export default Search;
