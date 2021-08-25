import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  PokemonListStyle,
  PokemonListLinkStyle,
  Wrapper,
} from './styles';
import { fetchPokemon } from '../../redux/actions/pokemon';
import { getPokemonList } from '../../redux/selectors/pokemon';

const ComponentA = ({
  pokemonList,
  fetchPokemon,
}) => {
  useEffect(() => {
    fetchPokemon();
  }, [ fetchPokemon ]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

ComponentA.propTypes = {
  pokemonList: PropTypes.array,
};

ComponentA.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);
