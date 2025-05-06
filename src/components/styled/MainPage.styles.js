import { styled } from 'styled-components';

// *************  Benner 영역  *****************
export const BannerContainer = styled.div`
  position: relative;
  height: 450px;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url('https://i.pinimg.com/736x/23/af/a3/23afa315ba55626e119ec5c2e8213258.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`;

export const BannerContent = styled.div`
  max-width: 600px;
  margin-left: 80px;

  h1 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  p {
    font-size: 22px;
    line-height: 1.4;
    margin-bottom: 30px;
  }
`;

export const BookButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  font-size: 18px;
  padding: 14px 28px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b0060f;
  }
`;

// *************  MovieList 영역  *****************

export const Section = styled.section`
  padding: 40px 60px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const MovieCard = styled.div`
  width: 200px;
  text-align: center;

  p {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;
