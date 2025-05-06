import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavItem } from '../styled/Header.styles';
import userInfoStore from '../../store/userInfoStore';

const Header = () => {
  const navigate = useNavigate();

  const { userInfo, clearUserInfo } = userInfoStore();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>🎬 Seokflix</Logo>
      <Nav>
        <NavItem to="/moviePage">영화</NavItem>
        <NavItem>게시판</NavItem>
        {userInfo && <NavItem to="/myPage">마이 페이지</NavItem>}
        {userInfo ? (
          <NavItem
            onClick={() => {
              const logOut = confirm('정말로 로그아웃 하시겠습니까?');
              if (logOut) {
                clearUserInfo();
                // clearUserInfo()호출시 상태변경 -> Header리렌더링
                // 이 시점에 navigate가 리렌더링시에 무시될 수 있음
                // 그러므로 setTimeout을 넣어서 이벤트 루프에 등록후 위의 clear가 끝난후 실행하라고 설정
                setTimeout(() => navigate('/'), 0);
              } else {
                return;
              }
            }}
          >
            로그아웃
          </NavItem>
        ) : (
          <NavItem to="/login">로그인</NavItem>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
