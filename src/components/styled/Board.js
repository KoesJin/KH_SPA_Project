import { styled } from 'styled-components';

export const BoardContainer = styled.div`
  padding: 40px;
  max-width: 1100px;
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
  width: 30%; /* 각 열 너비 고정 */
`;

export const TableCell = styled.td`
  padding: 12px 10px;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 페이징
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 50px;
  gap: 8px;
`;
