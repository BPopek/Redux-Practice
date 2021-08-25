import React from 'react';
import { useParams } from "react-router-dom";

import { H1Style } from './styles';

const Pokemon = () => {
  let { name } = useParams();

  return (
    <H1Style>{name}</H1Style>
  );
};

export default Pokemon;
