import React from 'react';
import {
  BannerContainer,
  BannerContent,
  BookButton,
  MovieCard,
  MovieContainer,
  MoviePoster,
  Section,
  SectionTitle,
} from '../components/styled/MainPage.styles';

const MainPage = () => {
  const movies = ['서울의 봄', '듄: 파트2', '쿵푸팬더4', '파묘'];

  return (
    <>
      {/* Banner.jsx */}
      <BannerContainer>
        <BannerContent>
          <h1>지금 상영 중!</h1>
          <p>IMAX로 즐기는 최고의 영화들</p>
          <BookButton>예매하기</BookButton>
        </BannerContent>
      </BannerContainer>

      {/* MovieList.jsx */}
      <Section>
        <SectionTitle>📽 상영 중인 영화</SectionTitle>
        <MovieContainer>
          {movies.map((title, idx) => (
            <MovieCard key={idx}>
              <MoviePoster src={`https://picsum.photos/id/${237 + idx}/200/300`} alt={title} />
              <p>{title}</p>
            </MovieCard>
          ))}
        </MovieContainer>
      </Section>
    </>
  );
};

export default MainPage;
