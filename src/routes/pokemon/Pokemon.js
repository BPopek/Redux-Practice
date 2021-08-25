import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPokemonStats } from '../../redux/actions/pokemon';
import { getPokemonStatsByName } from '../../redux/selectors/pokemon';

import {
  SpriteImage,
} from './styles';
import {
  H1Style,
  H2Style,
} from '../../styles';

const Pokemon = ({fetchPokemonStats, pokemonStats}) => {
  let { name } = useParams();

  useEffect(() => {
    fetchPokemonStats(name);
  }, [ fetchPokemonStats, name ]);

  return (
    <>
      <H1Style>{name}</H1Style>
      { pokemonStats?.sprites?.frontDefault && (
        <SpriteImage
          alt={name}
          src={pokemonStats?.sprites?.frontDefault}
          height={100}
          width={100}
        />
      )}
      <H2Style>Stats:</H2Style>
      <ul>
        <li>Weight: {pokemonStats.weight}</li>
        <li>Height: {pokemonStats.height}</li>
      </ul>
    </>
  );
};


const mapStateToProps = (state, ownProps) => {
  const name = ownProps?.match?.params?.name;

  return (
    { pokemonStats: getPokemonStatsByName(state, name) }
  )
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchPokemonStats
  };

  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);