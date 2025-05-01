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
} from '../styled/Login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <LoginBox>
        <Logo>Seokflix</Logo>
        <Title>로그인</Title>
        <Form>
          <InputWrapper>
            <Icon>
              <FaUser />
            </Icon>
            <Input type="text" placeholder="아이디 입력" />
          </InputWrapper>

          <InputWrapper>
            <Icon>
              <FaLock />
            </Icon>
            <Input type="password" placeholder="비밀번호 입력" />
          </InputWrapper>

          <Button>로그인</Button>
          <Button onClick={() => navigate('/')}>뒤로가기</Button>
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

export default Login;
