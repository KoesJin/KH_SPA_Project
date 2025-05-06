import React from 'react';
import { ErrorContainer, ErrorCode, ErrorMessage, BackButton } from '../components/styled/NotFound';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
      <BackButton onClick={() => navigate('/')}>홈으로 돌아가기</BackButton>
    </ErrorContainer>
  );
};

export default NotFound;
