import React from 'react';
import useUserStore from '../../../store/userInfoStore';
import {
  Background,
  Box,
  Title,
  InfoRow,
  Label,
  Value,
  Notice,
  ProfileImage,
  ProfileCard,
  ButtonGroup,
  StyledButton,
} from '../../styled/MyPage';

const MyPage = () => {
  const { userInfo, clearUserInfo } = useUserStore();

  const handleDelete = () => {
    const confirmDelete = confirm('정말 탈퇴하시겠습니까?');
    if (confirmDelete) {
      clearUserInfo();
      alert('회원 정보가 삭제되었습니다.');
      // 서버 요청이 있다면 axios.delete()도 이곳에
    }
  };

  const handleEdit = () => {
    alert('수정하기 기능은 준비 중입니다!');
    // 페이지 이동 또는 모달 띄우는 로직도 가능
  };

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
              <StyledButton onClick={handleEdit}>수정하기</StyledButton>
              <StyledButton onClick={handleDelete}>삭제하기</StyledButton>
            </ButtonGroup>
          </Box>
        </ProfileCard>
      ) : (
        // 로그인 정보가 없지만 URL 경로로 뚫고올 경우
        <Notice>로그인 정보가 없습니다.</Notice>
      )}
    </Background>
  );
};

export default MyPage;
