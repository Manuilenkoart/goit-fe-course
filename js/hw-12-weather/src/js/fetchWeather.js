'use strickt';

import Weather from './services/weather';

const refs = {
  searchForm: document.querySelector('#search-form'),
};

refs.searchForm.addEventListener('submit', searchFormHandle);

function searchFormHandle(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.city.value;
  Weather.fetchWeather(input);
}
