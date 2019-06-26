/* eslint-disable no-undef */
// eslint-disable-next-line func-names
const fetchResource = function (recouser, id) {
  return fetch(`https://pokeapi.co/api/v2/${recouser}/${id}`
    .then(response => response.json()))
    .then(json => console.log(json));
};

// fetchResource('pokemon', 1);

// eslint-disable-next-line func-names
let fetchPokemon = function (id) {
  return fetchResource('pokemon', id);
};

// fetchPokemon(1);

// eslint-disable-next-line func-names
// let fetcher = function (resource) {
//   // eslint-disable-next-line func-names
//   return function (id) {
//     return fetchResource(resource, id);
//   };
// };

let fetcher = resource => id => fetchResource(resource, id);

fetchPokemon = fetcher('pokemon');
// eslint-disable-next-line no-undef
fetchPokemonType = fetcher('type');
fetchPokemonType(1);
