import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
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
      {pokemonList.map((pokemon, index) => (
        <p key={index}>
          {pokemon.name}
        </p>
      ))}
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
