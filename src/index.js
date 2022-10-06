import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input#search-box'),
  countryList: document.querySelector('ul.country-list'),
  countryInfo: document.querySelector('div.country-info'),
};

refs.input.addEventListener(
  'input',
  debounce(event => {
    fetchCountries(event.target.value)
      .then(users => console.log(users))
      .catch(error => console.log(error));
  }, 300)
);
