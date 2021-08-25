import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavStyle = styled.div`
  margin: 10px 0;
`;

export const NavListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavListLinkStyle = styled(Link)`
  color: #000000;
  display: block;
  font-size: 24px;
  padding: 10px;
  text-decoration: none;
  text-transform: capitalize;
`;