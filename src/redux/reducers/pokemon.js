import { SET_POKEMON_LIST, SET_POKEMON_STATS } from '../../constants/action-types';

const defaultState = {
  pokemonList: [],
  pokemonStats: {}
};

const pokemonSchemaSprites = (obj) => ({
  frontDefault: obj?.front_default,
});

const pokemonSchema = (obj) => ({
  height: obj?.height || 0,
  weight: obj?.weight || 0,
  sprites: pokemonSchemaSprites(obj?.sprites),
});

function pokemon(state = defaultState, action) {
  switch (action.type) {
    case SET_POKEMON_LIST:
      const { pokemonList } = action;
      return {
        ...state,
        pokemonList
      };
    case SET_POKEMON_STATS:
      const { pokemonStats } = action;
      return {
        ...state,
        pokemonStats: {
          ...state.pokemonStats,
          // dynamic key to be able to sort multiple character's info
          [pokemonStats.name]: pokemonSchema(pokemonStats)
        }
      }
    default:
      return state;
  }
}

export default pokemon;
