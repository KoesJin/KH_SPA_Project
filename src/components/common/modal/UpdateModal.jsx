import React from 'react';
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

const UpdateModal = ({ closeModal }) => {
  return (
    <Overlay>
      <ModalBox>
        <Title>회원 정보 수정</Title>
        <Text>변경할 이름 또는 전화번호를 입력해주세요.</Text>

        <Input type="text" placeholder="이름 (선택)" />
        <Input type="text" placeholder="전화번호 (선택)" />

        <ButtonGroup>
          <CancelBtn onClick={closeModal}>취소</CancelBtn>
          <ConfirmBtn>수정</ConfirmBtn>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default UpdateModal;
