import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface AuthContextData {
  token: string | null;
  setNewToken: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
  isLogged: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setNewToken = (newToken: string) => {
    setIsLoading(true);
    setToken(newToken);
    AsyncStorage.setItem('token', newToken);
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setToken(null);
    AsyncStorage.removeItem('token');
    setIsLoading(false);
  };

  const isLogged = async () => {
    setIsLoading(true);
    const userToken = await AsyncStorage.getItem('token');
    if (userToken) {
      setNewToken(userToken);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    isLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{token, setNewToken, logout, isLoading, isLogged}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
