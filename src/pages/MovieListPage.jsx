import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridContainer, LoadingText, LoadingWrapper, PaginationWrapper } from '../components/styled/MovieList';
import Moive from '../components/movie/Moive';
import { Pagination, Stack } from '@mui/material';
import { RingLoader } from 'react-spinners';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // 페이징
  const [currentPage, setCurrentPage] = useState(1);

  // 로딩바
  const [loading, setLoading] = useState(true);

  // 마운트 시 , 페이지 변경시 렌더링
  useEffect(() => {
    const getMovies = async (page) => {
      setLoading(true);

      try {
        const apiKey = import.meta.env.VITE_MOVIE_API;
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`
        );

        // 영화 저장
        setMovies(res.data.results);
      } catch (error) {
        console.error('영화 데이터를 불러오는 데 실패했습니다:', error);
      } finally {
        // 로딩종료
        setLoading(false);
      }
    };

    getMovies(currentPage);
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <RingLoader color="#ffffff" size={60} />
          <LoadingText>영화를 불러오는 중입니다...</LoadingText>
        </LoadingWrapper>
      ) : (
        <>
          <GridContainer>
            {movies.map((m) => (
              <Moive
                key={m.id}
                poster_path={m.poster_path}
                title={m.title}
                vote_average={m.vote_average}
                movieId={m.id}
              />
            ))}
          </GridContainer>

          <PaginationWrapper>
            {/* spacing은 간격 2 = 18px */}
            <Stack spacing={2}>
              <Pagination
                count={100} // 전체 페이지 수
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
        </>
      )}
    </>
  );
};

export default MovieList;
