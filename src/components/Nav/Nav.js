import {
  NavListLinkStyle,
  NavListStyle,
  NavStyle,
} from './styles';

const Nav = () => (
  <NavStyle>
    <NavListStyle>
      <li>
        <NavListLinkStyle
          to="/"
        >Home</NavListLinkStyle>
      </li>
    </NavListStyle>
  </NavStyle>
);

export default Nav;