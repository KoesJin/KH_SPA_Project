import React from 'react';
import { MovieCard, MovieImage, MovieTitle, MovieRating } from '../styled/MovieList';
import MovieModal from '../common/modal/MovieModal';
import { useState } from 'react';

const Movie = ({ poster_path, title, vote_average, movieId }) => {
  // 모달
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MovieCard onClick={() => setIsOpen(true)}>
        <MovieImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>⭐ 평점: {vote_average}</MovieRating>
      </MovieCard>

      {isOpen && <MovieModal movieId={movieId} onClose={() => setIsOpen(!isOpen)} />}
    </>
  );
};

export default Movie;
