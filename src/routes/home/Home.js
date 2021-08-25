import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  PokemonListStyle,
  PokemonListLinkStyle,
} from './styles';
import { fetchPokemon } from '../../redux/actions/pokemon';
import { getPokemonList } from '../../redux/selectors/pokemon';

const Home = ({
  pokemonList,
  fetchPokemon,
}) => {
  useEffect(() => {
    if (pokemonList.length === 0) fetchPokemon();
  }, [ pokemonList, fetchPokemon ]);

  return (
    <PokemonListStyle>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>
          <PokemonListLinkStyle
            to={`/${pokemon.name}`}
          >
            {pokemon.name}
          </PokemonListLinkStyle>
        </li>
      ))}
    </PokemonListStyle>
  );
};

Home.propTypes = {
  pokemonList: PropTypes.array,
};

Home.defaultProps = {
  pokemonList: []
};

const mapStateToProps = (state) => ({
  pokemonList: getPokemonList(state),  
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchPokemon
  };

  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
