import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

const MovieModal = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = import.meta.env.VITE_MOVIE_API;

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR&append_to_response=videos`
        );
        setMovie(res.data);
      } catch (error) {
        console.error('영화 상세정보를 불러오는 중 오류 발생:', error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movie) return null;

  // 트레일러 영상이 2개이상 일때도 있어서 find 사용
  const trailer = movie.videos.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube');

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {trailer ? (
          <Iframe src={`https://www.youtube.com/embed/${trailer.key}`} title="예고편" allowFullScreen></Iframe>
        ) : (
          <p>예고편을 찾을 수 없습니다.</p>
        )}
      </ModalBox>
    </Overlay>
  );
};

export default MovieModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: #111;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  color: white;
`;

const CloseBtn = styled.button`
  float: right;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;
