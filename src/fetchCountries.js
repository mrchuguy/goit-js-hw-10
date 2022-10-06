export { fetchCountries };

const fields = ['name', 'capital', 'population', 'flags', 'languages'];

const fetchCountries = name => {
  const requestFields = fields.join(',');
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=${requestFields}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
