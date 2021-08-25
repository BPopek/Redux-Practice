import _ from 'lodash';

export const getPokemon = (state) => {
  return _.get(state, 'pokemon');
};

export const getPokemonList = (state) => {
  const pokemon = getPokemon(state);

  return _.get(pokemon, 'pokemonList', []);
};

export const getPokemonStats = (state) => {
  const pokemon = getPokemon(state);

  return _.get(pokemon, 'pokemonStats', {});
};

export const getPokemonStatsByName = (state, name) => {
  const pokemonStats = getPokemonStats(state);

  return _.get(pokemonStats, `${name}`, {});
};