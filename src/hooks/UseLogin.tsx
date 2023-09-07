import {useState} from 'react';
import {useAuth} from '../providers/AuthContext';
import useUserLoginStore from '../store/userStore';
import api from '../services/api';

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const {setNewToken} = useAuth();
  const {setUser} = useUserLoginStore();

  interface LoginProps {
    username: string;
    password: string;
  }

  const login = async (
    username: LoginProps['username'],
    password: LoginProps['password'],
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const {data: userData}: any = await api.post('/auth/login', {
        username,
        password,
      });

      setUser({token: userData.token, id: userData.id});
      setNewToken(userData.token);
      setData(userData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, error, data, login};
}

export default useLogin;
