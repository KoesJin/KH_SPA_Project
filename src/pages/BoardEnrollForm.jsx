import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, FormContainer, Input, Label, Textarea } from '../components/styled/Board';
import * as yup from 'yup'; // 유효성 검사 라이브러리
import { yupResolver } from '@hookform/resolvers/yup'; // react-hook-form에서 yup 사용하려면 필요
import { useForm } from 'react-hook-form';
import userInfoStore from '../store/userInfoStore';
import { ErrorText } from '../components/styled/ErrorText';
import { Notice } from '../components/styled/Notice';
import axios from 'axios';
import { performToast } from '../utils/performToast';

const schema = yup.object().shape({
  title: yup
    .string()
    .required('제목을 입력하세요.')
    .min(2, '제목은 최소 2자 이상 입력해주세요.')
    .max(50, '제목은 최대 50자까지만 입력 가능합니다.'),

  content: yup
    .string()
    .required('내용을 입력하세요.')
    .min(10, '내용은 최소 10자 이상 작성해주세요.')
    .max(1000, '내용은 최대 1000자까지만 입력 가능합니다.'),
});

const BoardEnrollForm = () => {
  const navigate = useNavigate();

  const { userInfo } = userInfoStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // 기존 게시글 가져오기 - 번호 가져오기 위함
      const getRes = await axios.get('http://localhost:3001/board');
      const boardList = getRes.data;

      // reduce함수 이용 큰 값을구하고 + 1 해서 게시글 작성시에 번호 1 증가
      const maxNo = boardList.reduce((acc, cur) => (cur.no > acc ? cur.no : acc), 0);
      const newNo = maxNo + 1;

      // 게시글 등록
      const res = await axios.post('http://localhost:3001/board', {
        no: newNo,
        title: data.title,
        content: data.content,
        writer: userInfo.userId,
        date: new Date().toISOString().split('T')[0],
        views: 0,
      });

      if (res.status === 201) {
        performToast({ msg: '게시글 작성에 성공했습니다 !', type: 'success' });
        navigate('/boardPage');
      }
    } catch (error) {
      console.log('글쓰기 작성 에러 : ', error);
    }
  };

  return userInfo ? (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>✏️ 글쓰기</h2>

      <Label>제목</Label>
      <Input type="text" placeholder="제목을 입력하세요" {...register('title')} />
      {errors.title && <ErrorText style={{ textAlign: 'left' }}>{errors.title.message}</ErrorText>}

      <Label>내용</Label>
      <Textarea placeholder="내용을 입력하세요" {...register('content')} />
      {errors.content && <ErrorText style={{ textAlign: 'left' }}>{errors.content.message}</ErrorText>}

      <ButtonGroup>
        <Button type="submit">등록</Button>
        <Button type="button" onClick={() => navigate('/boardPage')}>
          취소
        </Button>
      </ButtonGroup>
    </FormContainer>
  ) : (
    <Notice>로그인 정보가 없습니다.</Notice>
  );
};

export default BoardEnrollForm;
