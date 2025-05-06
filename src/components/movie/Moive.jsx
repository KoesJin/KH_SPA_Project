import React from 'react';
import { MovieCard, MovieImage, MovieTitle, MovieRating } from '../styled/MovieList';

const Movie = ({ poster_path, title, vote_average }) => {
  return (
    <MovieCard>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MovieRating>⭐ 평점: {vote_average}</MovieRating>
    </MovieCard>
  );
};

export default Movie;
