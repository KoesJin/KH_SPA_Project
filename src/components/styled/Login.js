import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 48px 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  color: white;
  text-align: center;
`;

export const Logo = styled.h1`
  color: #e50914;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
  padding: 0 12px;
`;

export const Icon = styled.span`
  color: #aaa;
  font-size: 18px;
  margin-right: 8px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  padding: 12px 0;
  width: 100%;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b0060f;
  }
`;

export const SubText = styled.p`
  margin-top: 24px;
  font-size: 14px;
`;

export const SignUpBtn = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
