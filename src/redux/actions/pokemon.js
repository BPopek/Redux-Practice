import { API_POKEMON } from '../../constants/api';
import { SET_POKEMON_LIST } from '../../constants/action-types';

const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});

export const fetchPokemon = () => {
  return (dispatch) => {
    const LIMIT = 10;
    fetch(`${API_POKEMON}?limit=${LIMIT}`)
    .then(response => response.json())
    .then((data) => {
      if (data?.results) dispatch(setPokemonList(data.results));
    });
  };
};