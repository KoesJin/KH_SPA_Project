import React from 'react';
import { MovieCard, MovieContainer, MoviePoster, Section, SectionTitle } from '../styled/MovieList';

const MovieList = () => {
  const movies = ['서울의 봄', '듄: 파트2', '쿵푸팬더4', '파묘'];

  return (
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
  );
};

export default MovieList;
