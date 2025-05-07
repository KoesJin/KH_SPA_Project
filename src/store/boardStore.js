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
}));

export default boardStore;
