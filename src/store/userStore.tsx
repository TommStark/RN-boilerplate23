import { create } from 'zustand';

interface user {
  token: string;
  id: number | null;
}

interface userLogin {
  user: user;
  userData: any;
  setUserCredentials: (user: { token: string; id: number }) => void;
  setUserData: (user: any) => void;
}

const useUserLoginStore = create<userLogin>(set => ({
  user: { token: '', id: null },
  userData: {},
  setUserCredentials: (user: user) =>
    set(() => {
      return { user: user };
    }),
  setUserData: (user: user) =>
    set(() => {
      return { userData: user };
    }),
}));

export default useUserLoginStore;
