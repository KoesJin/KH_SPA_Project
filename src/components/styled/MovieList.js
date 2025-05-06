import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ isTop5 }) => (isTop5 ? 'repeat(auto-fit, minmax(150px, 1fr))' : 'repeat(4, 1fr)')};
  justify-items: center;
  gap: 20px;
  padding: 20px;
`;

export const MovieCard = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const MovieImage = styled.img`
  width: ${(props) => (props.isTop5 ? '45%' : '80%')};
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

// 상단 헤더
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 10px;
`;

export const HeaderTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #222;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 6px 12px;
  width: 25%;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;
