import { API_POKEMON } from '../../constants/api';
import { SET_POKEMON_LIST, SET_POKEMON_STATS } from '../../constants/action-types';
import { getPokemonStatsByName } from '../selectors/pokemon';

const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});

const setPokemonStats = (pokemonStats) => ({
  type: SET_POKEMON_STATS,
  pokemonStats,
});

export const fetchPokemonList = () => {
  return (dispatch) => {
    const LIMIT = 10;
    fetch(`${API_POKEMON}?limit=${LIMIT}`)
    .then(response => response.json())
    .then((data) => {
      if (data?.results) dispatch(setPokemonList(data.results));
    });
  };
};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const fetchPokemonStats = (name) => {
  return (dispatch, getState) => {
    // check to see if info already loaded
    const pokemonStats = getPokemonStatsByName(getState(), name);
    if (!isEmpty(pokemonStats)) return;
    fetch(`${API_POKEMON}/${name}`)
    .then(response => response.json())
    .then((data) => {
      if (data) dispatch(setPokemonStats(data))
    })
  }
}