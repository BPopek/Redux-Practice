import React from 'react';
import { useParams } from "react-router-dom";

import {
  SpriteImage,
} from './styles';
import {
  H1Style,
} from '../../styles';

const Pokemon = () => {
  let { name } = useParams();
  const data = {
    height: 1,
    weight: 1,
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    }
  };

  return (
    <>
      <H1Style>{name}</H1Style>
      <SpriteImage
        alt={name}
        src={data?.sprites?.front_default}
      />
      <ul>
        <li>Weight: {data.weight}</li>
        <li>Height: {data.height}</li>
      </ul>
    </>
  );
};

export default Pokemon;
