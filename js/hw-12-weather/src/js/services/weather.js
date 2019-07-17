import itemTemplate from '../templates/item.hbs';

const baseUrl =
  'https://api.apixu.com/v1/current.json?key=31a2648ccc4341338bd153158191307';

const weatherId = document.querySelector('#weather');

export default {
  fetchWeather(query) {
    const requestParam = `&q=${query}&lang=uk`;

    return fetch(baseUrl + requestParam)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const markup = buildItemMarkup(data);
        insertItems(markup);
      });
  },
};
function insertItems(items) {
  weatherId.insertAdjacentHTML('beforeend', items);
}
function buildItemMarkup(items) {
  return itemTemplate(items);
}
