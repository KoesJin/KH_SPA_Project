import React from 'react';
import { FaUser, FaLock, FaRegIdCard } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Background, SignUpBox, Logo, Title, Form, InputWrapper, Input, Icon, Button, SubText } from '../styled/SignUp';
import * as yup from 'yup'; // 유효성 검사 라이브러리
import { yupResolver } from '@hookform/resolvers/yup'; // react-hook-form에서 yup 사용하려면 필요

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요.'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다').required('이메일을 입력하세요.'),
});

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert(`입력성공 ! 이름 : ${data.name} , 이메일 : ${data.email}`);
  };

  return (
    <Background>
      <SignUpBox>
        <Logo>Seokflix</Logo>
        <Title>회원가입</Title>
        <Form>
          <InputWrapper>
            <Icon>
              <FaRegIdCard />
            </Icon>
            <Input type="text" placeholder="이름 입력" />
          </InputWrapper>

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

          <InputWrapper>
            <Icon>
              <FaLock />
            </Icon>
            <Input type="password" placeholder="비밀번호 확인" />
          </InputWrapper>

          <Button type="button">회원가입</Button>
          <Button type="button" onClick={() => navigate('/')}>
            홈으로
          </Button>
        </Form>

        <SubText>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </SubText>
      </SignUpBox>
    </Background>
  );
};

export default SignUp;
