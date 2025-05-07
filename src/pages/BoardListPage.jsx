import React from 'react';
import {
  BoardContainer,
  BoardHeader,
  BoardTable,
  TableRow,
  TableHead,
  TableCell,
  WriteButton,
} from '../components/styled/Board';
import { FaChalkboardUser } from 'react-icons/fa6';
import { useEffect } from 'react';
import boardStore from '../store/boardStore';
import { PaginationWrapper } from '../components/styled/Board';
import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import userInfoStore from '../store/userInfoStore';
import { useNavigate } from 'react-router-dom';
import { performToast } from '../utils/performToast';

const BoardListPage = () => {
  const { boardList, getBoardList, totalCount } = boardStore();
  const { userInfo } = userInfoStore();

  // 페이징
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const limitContent = 10; // 현재 페이지 게시글 몇개 띄울지
  const totalPage = Math.ceil(totalCount / limitContent); // 총 몇페이지인지
  const startIdx = (currentPage - 1) * limitContent; // 어디부터 자를지 시작점
  const currentItems = boardList.slice(startIdx, startIdx + limitContent); // 어디부터 어디까지 자를지

  const navigate = useNavigate();

  useEffect(() => {
    getBoardList();
  }, []);

  const checkUserInfo = (boardNo) => {
    if (!userInfo) {
      performToast({ msg: '로그인 후 이용해주세요', type: 'error' });
    } else {
      navigate(`/boardDetail/${boardNo}`);
    }
  };

  return (
    <BoardContainer>
      <BoardHeader>
        <h2>
          <FaChalkboardUser style={{ verticalAlign: 'middle', marginRight: '8px', height: '25px', width: '35px' }} />
          게시판
        </h2>
        {userInfo && <WriteButton onClick={() => navigate('/boardEnrollForm')}>글쓰기</WriteButton>}
      </BoardHeader>

      <BoardTable>
        <thead>
          <TableRow>
            <TableHead>번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>작성자</TableHead>
            <TableHead>작성일</TableHead>
            <TableHead>조회수</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {currentItems.map((board) => (
            <TableRow key={board.no} onClick={() => checkUserInfo(board.no)}>
              <TableCell>{board.no}</TableCell>
              <TableCell>{board.title}</TableCell>
              <TableCell>{board.writer}</TableCell>
              <TableCell>{board.date}</TableCell>
              <TableCell>{board.views}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </BoardTable>

      <PaginationWrapper>
        {/* spacing은 간격 2 = 18px */}
        <Stack spacing={2}>
          <Pagination
            count={totalPage} // 전체 페이지 수
            page={currentPage} // 현재 페이지 (1부터 시작)
            onChange={(e, value) => setCurrentPage(value)} // value는 누른 숫자의 값을 추적함
            color="primary" // 색상 (primary, secondary 등)
            shape="rounded" // 모양 (rounded, circular 등)
            showFirstButton // '<<' 버튼 표시
            showLastButton // '>>' 버튼 표시
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white', // 일반 텍스트 색
                borderColor: 'white', // 경계선 색
              },
              '& .Mui-selected': {
                backgroundColor: 'white', // 선택된 버튼 배경
                color: '#000', // 선택된 버튼 텍스트
              },
            }}
          />
        </Stack>
      </PaginationWrapper>
    </BoardContainer>
  );
};

export default BoardListPage;
