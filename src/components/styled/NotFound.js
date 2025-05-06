import { styled } from 'styled-components';

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  color: white;
  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #e50914;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #b0060f;
  }
`;
