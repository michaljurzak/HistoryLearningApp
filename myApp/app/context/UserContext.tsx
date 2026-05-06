import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserContextType = {
  exp: number;
  addExp: (amount: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [exp, setExp] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('user_exp').then(val => {
      if (val) setExp(parseInt(val));
    });
  }, []);

  const addExp = async (amount: number) => {
    const newExp = exp + amount;
    setExp(newExp);
    await AsyncStorage.setItem('user_exp', newExp.toString());
  };

  return (
    <UserContext.Provider value={{ exp, addExp }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};