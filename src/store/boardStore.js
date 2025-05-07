import axios from 'axios';
import { create } from 'zustand';

const boardStore = create((set) => ({
  boardList: [],
  totalCount: null,
  getBoardList: async () => {
    try {
      const res = await axios.get(`http://localhost:3001/board`);

      set({ boardList: res.data, totalCount: res.data.length });
    } catch (error) {
      console.error('게시판 불러오기 실패:', error);
    }
  },
}));

export default boardStore;
