import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavStyle = styled.div`
  margin: 10px;
`;

export const NavListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavListLinkStyle = styled(Link)`
  display: block;
  padding: 10px;
  text-transform: capitalize;
`;