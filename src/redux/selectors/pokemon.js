import _ from 'lodash';

export const getPokemon = (state) => {
  return _.get(state, 'pokemon');
};

export const getPokemonList = (state) => {
  const pokemon = getPokemon(state);

  return _.get(pokemon, 'pokemonList') || [];
};