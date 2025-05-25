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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userInfoStore from '../../../store/userInfoStore';

const DeleteModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [userPw, setUserPw] = useState('');
  const { userInfo, clearUserInfo } = userInfoStore();

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!userPw) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:8888/api/member`, {
        user_id: userInfo.user_id,
        user_pw: userPw,
      });

      console.log(res);
      if (res.status === 200 && res.data === '') {
        //모달닫고
        closeModal();

        clearUserInfo();
        // clearUserInfo()호출시 상태변경 -> Header리렌더링
        // 이 시점에 navigate가 리렌더링시에 무시될 수 있음
        // 그러므로 setTimeout을 넣어서 이벤트 루프에 등록후 위의 clear가 끝난후 실행하라고 설정
        alert('정상적으로 회원 탈퇴가 완료되었습니다.');
        setTimeout(() => navigate('/'), 0);
      } else {
        alert(res.data);
      }
    } catch (error) {
      // console.log('회원삭제 axios 에러 :', error);
      console.log(error);
      alert(error.response.data);
    }
  };

  return (
    <Overlay>
      <ModalBox onSubmit={handleDelete}>
        <Title>회원 탈퇴 확인</Title>
        <Text>정말 탈퇴하시겠습니까? 비밀번호를 입력해주세요.</Text>
        <Input type="password" placeholder="비밀번호 입력" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
        <ButtonGroup>
          <CancelBtn type="button" onClick={closeModal}>
            취소
          </CancelBtn>
          <ConfirmBtn>확인</ConfirmBtn>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default DeleteModal;
