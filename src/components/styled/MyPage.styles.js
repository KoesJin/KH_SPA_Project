import { styled } from 'styled-components';

export const Background = styled.div`
  min-height: 80vh;
  padding: 80px 16px 40px;
  background-color: #141414;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px 32px;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #c11119;
  margin-bottom: 24px;
  pointer-events: none;
  box-shadow: 0 0 20px rgba(229, 9, 20, 0.4);
`;

export const Box = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 24px;
  text-align: center;
  border-bottom: 2px solid #e50914;
  padding-bottom: 12px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #bbb;
`;

export const Value = styled.span`
  color: white;
`;

export const Notice = styled.p`
  text-align: center;
  color: #888;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  gap: 14px;
`;

export const StyledButton = styled.button`
  flex: 1;
  padding: 12px 0;
  font-size: 15px;
  border: none;
  border-radius: 6px;
  background-color: #b0060f;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #8b040c;
    transform: translateY(-1px);
  }
`;
