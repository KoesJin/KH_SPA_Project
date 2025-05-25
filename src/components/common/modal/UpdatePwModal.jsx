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
import * as yup from 'yup'; // 유효성 검사 라이브러리
import { yupResolver } from '@hookform/resolvers/yup'; // react-hook-form에서 yup 사용하려면 필요
import { useForm } from 'react-hook-form';
import axios from 'axios';
import userInfoStore from '../../../store/userInfoStore';
import { ErrorText } from '../../styled/ErrorText';

const schema = yup.object().shape({
  currentPw: yup.string().required('현재 비밀번호를 입력하세요.'),

  newPw: yup
    .string()
    .required('새 비밀번호를 입력하세요.')
    .test('현재 비밀번호 새 비밀번호 확인', '입력하신 현재 비밀번호와 같습니다.', function (value) {
      return value !== this.parent.currentPw;
    })
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.'),

  confirmNewPw: yup
    .string()
    // yup.ref('userPw')는 다른 필드(userPw) 값을 참조
    // 즉, confirmNewPw가 newPw 같은지 검사
    // null은 비어있을 수도 있음을 대비한 처리
    // oneOf([허용할 값 ~~~ ], '에러 메세지')
    .oneOf([yup.ref('newPw'), null], '비밀번호가 일치하지 않습니다.')
    .required('새 비밀번호 확인을 입력하세요.'),
});

const UpdatePwModal = ({ closeModal }) => {
  const { userInfo, setUserInfo } = userInfoStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleUpdatePw = async (data) => {
    try {
      const res = await axios.patch(`http://localhost:8888/api/member/change-pw`, {
        user_id: userInfo.user_id,
        current_pw: data.currentPw,
        new_pw: data.newPw,
      });

      console.log(res);
      if (res.status === 200 && res.data?.user_id) {
        // 모달닫고
        closeModal();

        // 정보 변경
        setUserInfo(res.data);

        alert('정상적으로 비밀번호 정보변경이 완료되었습니다.');
      } else {
        // 현재 비밀번호와 입력한 현재 비밀번호가 같은경우
        alert('현재 비밀번호가 틀렸습니다.');
      }
    } catch (error) {
      console.log('비밀번호 변경 axios 에러 :', error);
    }
  };

  return (
    <Overlay>
      <ModalBox onSubmit={handleSubmit(handleUpdatePw)}>
        <Title>비밀번호 변경</Title>
        <Text>현재 비밀번호와 새 비밀번호를 입력해주세요.</Text>

        <Input type="password" placeholder="현재 비밀번호" {...register('currentPw')} />
        {errors.currentPw && <ErrorText style={{ textAlign: 'left' }}>{errors.currentPw.message}</ErrorText>}

        <Input type="password" placeholder="새 비밀번호" {...register('newPw')} />
        {errors.newPw && <ErrorText style={{ textAlign: 'left' }}>{errors.newPw.message}</ErrorText>}

        <Input type="password" placeholder="새 비밀번호 확인" {...register('confirmNewPw')} />
        {errors.confirmNewPw && <ErrorText style={{ textAlign: 'left' }}>{errors.confirmNewPw.message}</ErrorText>}

        <ButtonGroup>
          <CancelBtn type="button" onClick={closeModal}>
            취소
          </CancelBtn>
          <ConfirmBtn>변경</ConfirmBtn>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default UpdatePwModal;
