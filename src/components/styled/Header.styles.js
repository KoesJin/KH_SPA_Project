import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: black;
`;

export const Logo = styled.h1`
  font-size: 28px;
  color: #e50914;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;

  &:hover {
    color: #e50914;
  }
`;
