import React, { useState } from 'react';
import {
  Overlay,
  ModalBox,
  Title,
  Text,
  Input,
  ButtonGroup,
  CancelBtn,
  ConfirmBtn,
} from '../../styled/DeleteUpdateModal.styles';

const UpdatePwModal = ({ closeModal }) => {
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('기능은 아직 구현되지 않았습니다.');
  };

  return (
    <Overlay>
      <ModalBox>
        <form onSubmit={handleSubmit}>
          <Title>비밀번호 변경</Title>
          <Text>현재 비밀번호와 새 비밀번호를 입력해주세요.</Text>

          <Input
            type="password"
            placeholder="현재 비밀번호"
            value={currentPw}
            onChange={(e) => setCurrentPw(e.target.value)}
          />
          <Input type="password" placeholder="새 비밀번호" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
          <Input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />

          <ButtonGroup>
            <CancelBtn type="button" onClick={closeModal}>
              취소
            </CancelBtn>
            <ConfirmBtn type="submit">변경</ConfirmBtn>
          </ButtonGroup>
        </form>
      </ModalBox>
    </Overlay>
  );
};

export default UpdatePwModal;
