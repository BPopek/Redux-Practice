import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  PokemonListStyle,
  PokemonListLinkStyle,
} from './styles';
import { fetchPokemonList } from '../../redux/actions/pokemon';
import { getPokemonList } from '../../redux/selectors/pokemon';
import {
  H1Style,
} from '../../styles';

const Home = ({
  pokemonList,
  fetchPokemonList,
}) => {
  useEffect(() => {
    if (pokemonList.length === 0) fetchPokemonList();
  }, [ pokemonList, fetchPokemonList ]);

  return (
    <>
      <H1Style>Pokémon List</H1Style>
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
    </>
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
    fetchPokemonList
  };

  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
