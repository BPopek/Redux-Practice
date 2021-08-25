import { SET_POKEMON_LIST } from '../../constants/action-types';

const defaultState = {
  pokemonList: [],
};

function pokemon(state = defaultState, action) {
  switch (action.type) {
    case SET_POKEMON_LIST:
      const { pokemonList } = action;
      return {
        ...state,
        pokemonList
      };

    default:
      return state;
  }
}

export default pokemon;
