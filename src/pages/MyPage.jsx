import React from 'react';
import {
  Background,
  Box,
  Title,
  InfoRow,
  Label,
  Value,
  ProfileImage,
  ProfileCard,
  ButtonGroup,
  StyledButton,
} from '../components/styled/MyPage.styles';
import userInfoStore from '../store/userInfoStore';
import DeleteModal from '../components/common/modal/DeleteModal';
import UpdateInfoModal from '../components/common/modal/UpdateInfoModal';
import { useState } from 'react';
import UpdatePwModal from '../components/common/modal/UpdatePwModal';
import { Notice } from '../components/styled/Notice';

const MyPage = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const { userInfo } = userInfoStore();

  return (
    <Background>
      {userInfo ? (
        <ProfileCard>
          <ProfileImage
            src="https://i.pinimg.com/736x/9a/68/c0/9a68c071c26353631128bc49046128ee.jpg"
            alt="프로필 이미지"
          />
          <Box>
            <Title>회원 정보</Title>
            <InfoRow>
              <Label>이름</Label>
              <Value>{userInfo.userName}</Value>
            </InfoRow>
            <InfoRow>
              <Label>아이디</Label>
              <Value>{userInfo.userId}</Value>
            </InfoRow>
            <InfoRow>
              <Label>전화번호</Label>
              <Value>{userInfo.phone}</Value>
            </InfoRow>

            <ButtonGroup>
              <StyledButton onClick={() => openModal('updateInfo')}>정보수정</StyledButton>
              <StyledButton onClick={() => openModal('updatePw')}>비밀번호 변경</StyledButton>
              <StyledButton onClick={() => openModal('delete')}>탈퇴하기</StyledButton>
            </ButtonGroup>
          </Box>
        </ProfileCard>
      ) : (
        // 로그인 정보가 없지만 URL 경로로 뚫고올 경우
        <Notice>로그인 정보가 없습니다.</Notice>
      )}

      {/* 모달 컴포넌트 */}
      {modalType === 'updateInfo' && <UpdateInfoModal closeModal={closeModal} />}
      {modalType === 'updatePw' && <UpdatePwModal closeModal={closeModal} />}
      {modalType === 'delete' && <DeleteModal closeModal={closeModal} />}
    </Background>
  );
};

export default MyPage;
