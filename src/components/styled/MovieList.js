import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const MovieCard = styled.div`
  text-align: center;
`;

export const MovieImage = styled.img`
  width: 80%;
  border-radius: 8px;
`;

export const MovieTitle = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold; /* 제목 굵게 */
`;

export const MovieRating = styled.p`
  margin-top: 4px;
  font-size: 0.95rem;
  font-weight: bold; /* 평점 굵게 */
  color: #f1c40f; /* 노란색 평점 (선택사항) */
`;

// 페이징

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 50px;
  gap: 8px;
`;

// 로딩

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  color: white;
`;

export const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: bold;
`;
