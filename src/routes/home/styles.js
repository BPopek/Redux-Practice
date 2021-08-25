import styled from 'styled-components';
import { Link } from "react-router-dom";

export const PokemonListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PokemonListLinkStyle = styled(Link)`
  display: block;
  padding: 5px;
  text-transform: capitalize;
`;