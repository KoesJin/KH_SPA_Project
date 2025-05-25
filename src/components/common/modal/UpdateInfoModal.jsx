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
import userInfoStore from '../../../store/userInfoStore';
import axios from 'axios';
import * as yup from 'yup'; // 유효성 검사 라이브러리
import { yupResolver } from '@hookform/resolvers/yup'; // react-hook-form에서 yup 사용하려면 필요
import { useForm } from 'react-hook-form';
import { ErrorText } from '../../styled/ErrorText';

const schema = yup.object().shape({
  // 유효성 검사
  userName: yup
    .string()
    .required('이름을 입력하세요.')
    .matches(/^[가-힣]+$/, '이름은 한글만 입력 가능합니다.')
    .max(4, '이름은 최대 4자까지만 입력 가능합니다.'),

  phone: yup
    .string()
    .required('전화번호를 입력하세요.')
    .matches(/^010\d{8}$/, "010으로 시작하고 '-' 제외한 11자리여야 합니다."),
});

const UpdateInfoModal = ({ closeModal }) => {
  const { userInfo, setUserInfo } = userInfoStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues를 이용해 초기값 세팅 가능
    defaultValues: {
      userName: userInfo.user_name,
      phone: userInfo.phone,
    },
  });

  const handleUpdateInfo = async (data) => {
    try {
      const res = await axios.patch(`http://localhost:8888/api/member/change-info`, {
        user_id: userInfo.user_id,
        user_name: data.userName,
        phone: data.phone,
      });

      if (res.status === 200) {
        // 모달닫고
        closeModal();

        // 정보 변경
        setUserInfo(res.data);

        alert('정상적으로 회원 정보변경이 완료되었습니다.');
      } else {
        alert('회원 정보 변경에 실패하였습니다.');
      }
    } catch (error) {
      if (error.status === 500) {
        alert('존재하지 않는 회원입니다.');
      }
      console.log('회원정보 변경 axios 에러 :', error);
    }
  };

  return (
    <Overlay>
      <ModalBox onSubmit={handleSubmit(handleUpdateInfo)}>
        <Title>회원 정보 수정</Title>
        <Text>변경할 이름 또는 전화번호를 입력해주세요.</Text>

        <Input type="text" placeholder="이름" {...register('userName')} />
        {errors.userName && <ErrorText style={{ textAlign: 'left' }}>{errors.userName.message}</ErrorText>}

        <Input type="text" placeholder="전화번호" {...register('phone')} />
        {errors.phone && <ErrorText style={{ textAlign: 'left' }}>{errors.phone.message}</ErrorText>}

        <ButtonGroup>
          <CancelBtn type="button" onClick={closeModal}>
            취소
          </CancelBtn>
          <ConfirmBtn>수정</ConfirmBtn>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default UpdateInfoModal;
