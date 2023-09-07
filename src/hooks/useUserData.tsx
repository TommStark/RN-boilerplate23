import api from '../services/api';
import {User} from '../interfaces/user';
import {useQuery} from '@tanstack/react-query';

// const getUsers = async (): Promise<UserData[]> => {
//   const {data} = await api.get<UserData[]>('/users');
//   return data;
// };
const getMe = async (id: number | null): Promise<User | null> => {
  if (id === null) {
    return null;
  }
  const {data} = await api.get<User>('/users/' + id);
  return data;
};

export const useUserData = (id: number | null) => {
  const meQuery = useQuery(['users', id], () => getMe(id));
  //   const usersQuery = useQuery(['users'], getUsers);

  return {
    meQuery,
    // usersQuery,
  };
};
