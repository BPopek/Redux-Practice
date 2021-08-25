import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  border: solid 1px black;
  margin-bottom: 10px;
  padding: 10px;
`;

export const PokemonListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PokemonListLinkStyle = styled(Link)`
  display: block;
  padding: 10px;
  text-transform: capitalize;
`;