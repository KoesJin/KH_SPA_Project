import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavItem } from '../styled/Header';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>🎬 Seokflix</Logo>
      <Nav>
        <NavItem>영화</NavItem>
        <NavItem>예매</NavItem>
        <NavItem to="/login">로그인</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
