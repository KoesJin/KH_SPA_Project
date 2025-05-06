import { styled } from 'styled-components';

// *************  Benner 영역  *****************
export const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1607082349566-1873426c21ff?fit=crop&w=1200');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const BannerContent = styled.div`
  padding-left: 80px;
  z-index: 2;

  h1 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const BookButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;

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
  flex-wrap: wrap;
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
