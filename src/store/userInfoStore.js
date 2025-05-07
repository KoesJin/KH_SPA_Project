import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userInfoStore = create(
  // persist를 이용하여 상태값이 바뀔때 마다 로컬스토리지에 key를 저장하고 -> localStorage.setItem('등록한 key')
  // store가 처음 생성될때 localStorage.getItem('등록한 key')를 읽어준다.
  // 새로고침 및 앱 다시 시작하면 store가 초기화 되는데 그떄 읽어주는거임.
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (user) => set({ userInfo: user }),
      clearUserInfo: () => set({ userInfo: null }),
    }),
    {
      name: 'user',
    }
  )
);

export default userInfoStore;
