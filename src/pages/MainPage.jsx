import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BannerContainer,
  BannerContent,
  BookButton,
  MovieContainer,
  Section,
  SectionTitle,
} from '../components/styled/MainPage.styles';
import Movie from '../components/movie/Moive';

const MainPage = () => {
  // 영화
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTopNowPlaying = async () => {
      try {
        const apiKey = import.meta.env.VITE_MOVIE_API;
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`
        );

        // 상영 중인 영화 중 상위 5개만 가져옴
        setTopMovies(res.data.results.slice(0, 5));
      } catch (error) {
        console.error('상영 중인 영화 불러오기 실패:', error);
      }
    };

    getTopNowPlaying();
  }, []);

  return (
    <>
      {/* Banner */}
      <BannerContainer>
        <BannerContent>
          <h1>지금 상영 중!</h1>
          <p>IMAX로 즐기는 최고의 영화들</p>
          <BookButton>영화 구경하러 가기</BookButton>
        </BannerContent>
      </BannerContainer>

      {/* 상영 중인 영화 리스트 */}
      <Section>
        <SectionTitle>📽 상영 중인 영화 TOP 5</SectionTitle>
        <MovieContainer>
          {topMovies.map((m) => (
            <Movie
              key={m.id}
              poster_path={m.poster_path}
              title={m.title}
              vote_average={m.vote_average}
              movieId={m.id}
            />
          ))}
        </MovieContainer>
      </Section>
    </>
  );
};

export default MainPage;
