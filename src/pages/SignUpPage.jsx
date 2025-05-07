import React from 'react';
import { FaUser, FaLock, FaRegIdCard, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {
  Background,
  SignUpBox,
  Logo,
  Title,
  Form,
  InputWrapper,
  Input,
  Icon,
  Button,
  SubText,
} from '../components/styled/SignUpPage.styles';
import * as yup from 'yup'; // 유효성 검사 라이브러리
import { yupResolver } from '@hookform/resolvers/yup'; // react-hook-form에서 yup 사용하려면 필요
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ErrorText } from '../components/styled/ErrorText';

const schema = yup.object().shape({
  // 유효성 검사
  userName: yup
    .string()
    .required('이름을 입력하세요.')
    .matches(/^[가-힣]+$/, '이름은 한글만 입력 가능합니다.')
    .max(4, '이름은 최대 4자까지만 입력 가능합니다.'),

  userId: yup
    .string()
    .required('아이디를 입력하세요.')
    .min(5, '아이디는 최소 5자 이상이어야 합니다.')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '아이디에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!'
    ),

  userPw: yup
    .string()
    .required('비밀번호를 입력하세요.')
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.'),

  userPwCheck: yup
    .string()
    // yup.ref('userPw')는 다른 필드(userPw) 값을 참조
    // 즉, userPwCheck가 userPw와 같은지 검사
    // null은 비어있을 수도 있음을 대비한 처리
    // oneOf([허용할 값 ~~~ ], '에러 메세지')
    .oneOf([yup.ref('userPw'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력하세요.'),

  phone: yup
    .string()
    .required('전화번호를 입력하세요.')
    .matches(/^010\d{8}$/, "010으로 시작하고 '-' 제외한 11자리여야 합니다."),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // useForm() 안에 정의된 함수지만,
    // handleSubmit()처럼 제출 시점이 아니더라도
    // 직접 setError()를 호출하면 그 즉시 errors에 반영됨
    setError,
    clearErrors,
  } = useForm({ resolver: yupResolver(schema) });

  // onSubmit -> handleSubmit -> Ok 시 onSubmit 함수 실행 -> 데이터 서버에 전달
  // 회원 가입 로직
  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:3001/user', {
        userName: data.userName,
        userId: data.userId,
        userPw: data.userPw,
        phone: data.phone,
      });

      if (res.status === 201) {
        alert('성공적으로 회원 가입이 완료되었습니다 ‼️');
        navigate('/login');
      }
    } catch (error) {
      console.log('회원가입 에러 : ', error);
    }
  };

  // 이벤트 플래그 변수 선언
  let eventFlag;

  // 아이디 중복 체크 로직
  const checkId = (userId) => {
    if (userId.trim().length >= 5) {
      clearTimeout(eventFlag); //아직 실행되지않은 setTimeout 취소 -> 0.5초안에 입력을 추가로 하면 앞에 setTimout을 취소
      eventFlag = setTimeout(async () => {
        try {
          const res = await axios.get(`http://localhost:3001/user?userId=${userId}`);

          if (res.data.length > 0 && res.status === 200) {
            setError('userId', {
              type: 'manual',
              message: '이미 사용중인 아이디입니다.',
            });
          } else {
            clearErrors('userId');
          }
        } catch (error) {
          console.log('중복확인 에러 : ', error);
        }
      }, 500);
    }
  };

  return (
    <Background>
      <SignUpBox>
        <Logo>SeokCinema</Logo>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Icon>
              <FaRegIdCard />
            </Icon>
            <Input type="text" placeholder="이름 입력" {...register('userName')} />
          </InputWrapper>
          {errors.userName && <ErrorText style={{ textAlign: 'left' }}>{errors.userName.message}</ErrorText>}

          <InputWrapper>
            <Icon>
              <FaPhone />
            </Icon>
            <Input type="text" placeholder="전화번호 입력" {...register('phone')} />
          </InputWrapper>
          {errors.phone && <ErrorText style={{ textAlign: 'left' }}>{errors.phone.message}</ErrorText>}

          <InputWrapper>
            <Icon>
              <FaUser />
            </Icon>
            {/* register 내부에도 onChange가 있지만 별도의 onChange를 함께서도 에러 x */}
            {/* register를 작성하면 React Hook Form이 내부적으로 사용하는 onChange에 내가 지정한 커스텀 onChange 함수를 함께 묶어서 실행한다. */}
            {/* yup은 비동기가 불가능하여 이렇게 따로 분리 */}
            <Input
              type="text"
              placeholder="아이디 입력"
              {...register('userId', {
                onChange: (e) => {
                  const value = e.target.value;
                  // 중복검사함수 실행
                  checkId(value);
                },
              })}
            />
          </InputWrapper>
          {errors.userId && <ErrorText style={{ textAlign: 'left' }}>{errors.userId.message}</ErrorText>}

          <InputWrapper>
            <Icon>
              <FaLock />
            </Icon>
            <Input type="password" placeholder="비밀번호 입력" {...register('userPw')} />
          </InputWrapper>
          {errors.userPw && <ErrorText style={{ textAlign: 'left' }}>{errors.userPw.message}</ErrorText>}

          <InputWrapper>
            <Icon>
              <FaLock />
            </Icon>
            <Input type="password" placeholder="비밀번호 확인" {...register('userPwCheck')} />
          </InputWrapper>
          {errors.userPwCheck && <ErrorText style={{ textAlign: 'left' }}>{errors.userPwCheck.message}</ErrorText>}

          <Button type="submit">회원가입</Button>
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

export default SignUpPage;
