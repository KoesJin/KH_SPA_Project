import { styled } from 'styled-components';

// 게시판 리스트
export const BoardContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const WriteButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #b0060f;
  }
`;

export const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #444;

  &:hover {
    background-color: #222;
  }
`;

export const TableHead = styled.th`
  padding: 12px 10px;
  text-align: left;
  background-color: #333;
  font-weight: bold;
  /* width: 30%; 각 열 너비 고정 */
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 12px 10px;
  /* width: 30%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  cursor: pointer;
`;

// 페이징
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 50px;
  gap: 8px;
`;

// 게시판 작성

export const FormContainer = styled.form`
  max-width: 800px;
  margin: 50px auto;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
`;

export const Textarea = styled.textarea`
  margin-top: 5px;
  margin-bottom: 12px;
  padding: 10px;
  height: 300px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  resize: vertical;
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #b0060f;
  }
`;

// 게시판 상세

export const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 32px;
  color: white;
  background-color: #222;
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #ffffff;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 30px;
  color: #ccc;
  font-size: 15px;
`;

export const InfoItem = styled.div`
  line-height: 1.6;
`;

export const Content = styled.div`
  background-color: #1c1c1c;
  color: #f1f1f1;
  padding: 32px;
  font-size: 18px;
  border-radius: 12px;
  line-height: 1.8;
  white-space: pre-wrap;
  margin-bottom: 30px;
  width: 100%;
  height: 350px;
`;
