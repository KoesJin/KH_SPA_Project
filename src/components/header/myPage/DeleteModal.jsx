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
} from '../../styled/DeleteUpdateModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userInfoStore from '../../../store/userInfoStore';

const DeleteModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const { userInfo, clearUserInfo } = userInfoStore();

  const handleDelete = async (inputPw) => {
    if (inputPw !== userInfo.userPw) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      try {
        const res = await axios.delete(`http://localhost:3001/user/${userInfo.id}`);

        if (res.status === 200) {
          //모달닫고
          closeModal();

          clearUserInfo();
          // clearUserInfo()호출시 상태변경 -> Header리렌더링
          // 이 시점에 navigate가 리렌더링시에 무시될 수 있음
          // 그러므로 setTimeout을 넣어서 이벤트 루프에 등록후 위의 clear가 끝난후 실행하라고 설정
          alert('정상적으로 회원 탈퇴가 완료되었습니다.');
          setTimeout(() => navigate('/'), 0);
        } else {
          alert('회원 탈퇴에 실패하였습니다.');
        }
      } catch (error) {
        console.log('회원삭제 axios 에러 :', error);
      }
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>회원 탈퇴 확인</Title>
        <Text>정말 탈퇴하시겠습니까? 비밀번호를 입력해주세요.</Text>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonGroup>
          <CancelBtn onClick={closeModal}>취소</CancelBtn>
          <ConfirmBtn onClick={() => handleDelete(password)}>확인</ConfirmBtn>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default DeleteModal;
