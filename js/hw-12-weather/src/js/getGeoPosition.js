'use strict';
import PNotify from 'PNotify/dist/es/PNotify.js';
import 'PNotify/dist/PNotifyBrightTheme.css';
import Weather from './services/weather';

export default getGeoPosition()
  .then(location => {
    let coor =
      location.coords.latitude.toString() +
      ',' +
      location.coords.longitude.toString();

    Weather.fetchWeather(coor);
  })
  .catch(error => {
    PNotify.error({
      title: 'Oh No!',
      text: 'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    });
  });

function getGeoPosition() {
  const options = {
    maximumAge: 30000,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
