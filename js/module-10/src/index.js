import menu from './menu.json';
import menuCards from './templates/card.hbs';
import './styles.css';

const refs = {
  postFeed: document.querySelector('.menu'),
  themeMode: document.querySelector('body'),
  toolBarIcon: document.querySelector('.toolbar__icon'),
};
buildMenuCards(menuCards);
function buildMenuCards(card) {
  const markup = menu.map(menuEl => menuCards(menuEl)).join('');
  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}
const button = document.querySelector('button[data-action="theme-switch"]');
button.addEventListener('click', toggleTheme);

const getThemeMode = localStorage.getItem('theme');
const getIcon = localStorage.getItem('icon');

if (!getThemeMode) {
  setTheme();
} else {
  setItemTheme(getThemeMode);
  setLocalStorageIcon(getIcon);
}
function toggleTheme() {
  if (refs.class === 'theme-light') {
    return handleDark();
  }
  handleLight();
}
function setTheme() {
  setItemTheme('theme-light');
  setLocalStorageIcon('wb_sunny');
}

function handleDark() {
  setItemTheme('theme-dark');
  setLocalStorageIcon('brightness_3');
}
function handleLight() {
  setItemTheme('theme-light');
  setLocalStorageIcon('wb_sunny');
}
function setItemTheme(themeMode) {
  refs.themeMode.classList.remove(refs.class);
  refs.class = themeMode;
  refs.themeMode.classList.add(refs.class);
  localStorage.setItem('theme', refs.class);
}
function setLocalStorageIcon(icon) {
  refs.icon = icon;
  refs.toolBarIcon.textContent = refs.icon;
  localStorage.setItem('icon', refs.icon);
}
