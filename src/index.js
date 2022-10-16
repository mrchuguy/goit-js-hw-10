import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input#search-box'),
  countryList: document.querySelector('ul.country-list'),
  countryInfo: document.querySelector('div.country-info'),
};

const clearCountries = () => {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};

const inputEvent = event => {
  if (event.target.value.trim() !== '')
    fetchCountries(event.target.value.trim())
      .then(countries => handlingCountriesList(countries))
      .catch(error => showError(error));
  else clearCountries();
};

const showError = error => {
  if (error.message === '404') {
    clearCountries();
    Notify.failure('Oops, there is no country with that name');
  }
};

const renderCountryInfo = countries => {
  clearCountries();
  const markup = `
  <ul class="country-info__list">
    <li class="country-info__item">
      <img class="country-info__img" src="${countries[0].flags.png}" alt="${
    countries[0].name.common
  } flag">
      <h1 class="country-info__title">${countries[0].name.common}</h1>
    </li>
    <li class="country-info__item">
      <b>Capital:&#160;</b> ${countries[0].capital}
    </li>
    <li class="country-info__item">
      <b>Population:&#160;</b> ${countries[0].population}
    </li>
    <li class="country-info__item">
      <b>Languages:&#160;</b> ${Object.values(countries[0].languages).join(
        ', '
      )}
    </li>
  </ul>
  `;
  refs.countryInfo.innerHTML = markup;
  console.log(countries[0]);
};

const renderCountriesList = countries => {
  const markup = countries
    .map(
      country => `
    <li class="country-list__item">
      <img class="country-list__img" src="${country.flags.png}" alt="${country.name.common} flag">
      <b>${country.name.common}</b>
    </li>
    `
    )
    .join('');
  clearCountries();
  refs.countryList.innerHTML = markup;
};

const handlingCountriesList = countries => {
  if (countries.length > 10) {
    clearCountries();
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countries.length === 1) {
    renderCountryInfo(countries);
  } else {
    renderCountriesList(countries);
  }
};

refs.input.addEventListener(
  'input',
  debounce(event => {
    inputEvent(event);
  }, DEBOUNCE_DELAY)
);
