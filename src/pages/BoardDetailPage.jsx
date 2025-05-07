import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Content, DetailWrapper, InfoBox, InfoItem, Title } from '../components/styled/Board.js';
import boardStore from '../store/boardStore';
import { FaRegFileAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import userInfoStore from '../store/userInfoStore.js';
import { Notice } from '../components/styled/Notice.js';

const BoardDetailPage = () => {
  const { no } = useParams();

  const navigate = useNavigate();

  const { boardList, getBoardList } = boardStore();

  const { userInfo } = userInfoStore();

  useEffect(() => {
    getBoardList();
  }, []);

  const boardDetail = boardList.find((board) => board.no === parseInt(no));

  if (!boardDetail) return <div>게시글을 찾을 수 없습니다.</div>;

  return userInfo ? (
    <DetailWrapper>
      <Title>
        <FaRegFileAlt style={{ marginRight: '10px', verticalAlign: 'middle', marginBottom: '5px' }} />
        게시글 상세보기
      </Title>

      <h2 style={{ fontSize: '28px', color: 'white', marginBottom: '20px' }}>{boardDetail.title}</h2>

      <InfoBox>
        <InfoItem>
          <strong>글 번호</strong> {boardDetail.no}
        </InfoItem>
        <InfoItem>
          <strong>작성자</strong> {boardDetail.writer}
        </InfoItem>
        <InfoItem>
          <strong>작성일</strong> {boardDetail.date}
        </InfoItem>
        <InfoItem>
          <strong>조회수</strong> {boardDetail.views}
        </InfoItem>
      </InfoBox>

      <Content>{boardDetail.content}</Content>

      <Button onClick={() => navigate('/boardPage')}>목록으로</Button>
    </DetailWrapper>
  ) : (
    <Notice>로그인 정보가 없습니다.</Notice>
  );
};

export default BoardDetailPage;
