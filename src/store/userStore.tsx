import {create} from 'zustand';

interface user {
  token: string;
  id: number | null;
}

interface userLogin {
  user: user;
  setUser: (user: {token: string; id: number}) => void;
}

const useUserLoginStore = create<userLogin>(set => ({
  user: {token: '', id: null},
  setUser: (user: user) =>
    set(() => {
      return {user: user};
    }),
}));

export default useUserLoginStore;
