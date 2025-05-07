import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Background,
  LoginBox,
  Logo,
  Title,
  InputWrapper,
  Input,
  Icon,
  Button,
  SubText,
  Form,
  SignUpBtn,
} from '../components/styled/LoginPage.styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import userInfoStore from '../store/userInfoStore';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const { setUserInfo } = userInfoStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 아이디 입력 체크
    if (userId.trim().length === 0) {
      alert('아이디를 입력해주세요.');
      return;
    }

    // 비밀번호 입력 체크
    if (userPw.trim().length === 0) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/user?userId=${userId}`);

      if (res.data.length === 0 && res.status === 200) {
        alert('존재하지 않는 아이디입니다.');
      } else {
        // 비멀번호 같은지 확인
        if (res.data[0].userPw === userPw) {
          // store에 유저 정보 저장
          setUserInfo(res.data[0]);
          alert('로그인에 성공하였습니다 ‼️');
          navigate('/');
        } else {
          alert('비밀번호가 틀렸습니다.');
        }
      }
    } catch (error) {
      console.log('로그인 axios 에러 : ', error);
    }
  };

  return (
    <Background>
      <LoginBox>
        <Logo>SeokCinema</Logo>
        <Title>로그인</Title>
        <Form onSubmit={handleLogin}>
          <InputWrapper>
            <Icon>
              <FaUser />
            </Icon>
            <Input type="text" placeholder="아이디 입력" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </InputWrapper>

          <InputWrapper>
            <Icon>
              <FaLock />
            </Icon>
            <Input
              type="password"
              placeholder="비밀번호 입력"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
          </InputWrapper>

          <Button type="submit">로그인</Button>
          <Button type="button" onClick={() => navigate('/')}>
            뒤로가기
          </Button>
        </Form>
        <SubText>
          계정이 없으신가요?{' '}
          <SignUpBtn type="button" to="/signup">
            회원가입
          </SignUpBtn>
        </SubText>
      </LoginBox>
    </Background>
  );
};

export default LoginPage;
