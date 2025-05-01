import { styled } from 'styled-components';

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
