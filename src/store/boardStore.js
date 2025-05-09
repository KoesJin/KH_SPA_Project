import { Co2Sharp } from '@mui/icons-material';
import axios from 'axios';
import { create } from 'zustand';

const boardStore = create((set) => ({
  boardList: [],
  totalCount: null,
  getBoardList: async () => {
    try {
      const res = await axios.get(`http://localhost:3001/board`);

      if (res.status === 200) {
        const sortedData = res.data.sort((a, b) => b.no - a.no); // no 기준 내림 차순 정렬
        set({ boardList: sortedData, totalCount: res.data.length });
      }
    } catch (error) {
      console.error('게시판 불러오기 실패:', error);
    }
  },

  viewsUp: async (boardNo) => {
    try {
      // 게시글 조회
      const res = await axios.get(`http://localhost:3001/board?no=${boardNo}`);
      const target = res.data[0]; // 첫 번째 게시글 객체 -> get은 객체 배열로 주기 때문에 따로 꺼내기

      if (target) {
        await axios.patch(`http://localhost:3001/board/${target.id}`, {
          views: target.views + 1,
        });
      }
    } catch (error) {
      console.error('게시판 조회수 증가 실패:', error);
    }
  },
}));

export default boardStore;
