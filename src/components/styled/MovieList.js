import { styled } from 'styled-components';

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
