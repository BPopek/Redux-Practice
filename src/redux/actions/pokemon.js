import { SET_POKEMON_LIST } from '../../constants/action-types';

const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});

export const fetchPokemon = () => {
  return (dispatch) => {
    const LIMIT = 10;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`)
    .then(response => response.json())
    .then((data) => {
      if (data?.results) dispatch(setPokemonList(data.results));
    });
  };
};