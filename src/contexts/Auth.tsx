import React, {createContext, useState, useContext, useEffect} from 'react';
import asyncStorage from '@react-native-async-storage/async-storage';
import type {AuthData} from '../services/auth';
import {authService} from '../services/auth';

type AuthContextProps = {
  data?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await asyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const authData: AuthData = JSON.parse(authDataSerialized);
        setData(authData);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  const signIn = async () => {
    const authData = await authService.signIn(
      'lucasgarcez@email.com',
      '123456',
    );

    setData(authData);
    asyncStorage.setItem('@AuthData', JSON.stringify(authData));
  };

  const signOut = async () => {
    setData(undefined);
    await asyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{data, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export {AuthContext, AuthProvider, useAuth};
