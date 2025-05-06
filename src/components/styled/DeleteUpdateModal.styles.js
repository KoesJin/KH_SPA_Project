import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.form`
  background: #222;
  padding: 32px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  color: white;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const CancelBtn = styled.button`
  background: #666;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  background: #e50914;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;
