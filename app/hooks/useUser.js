import React, { createContext, useContext } from 'react';
import { useFirebase } from './useFirebase';

export const userContext = createContext();

export const ProvideUser = ({ children }) => {
  const { user, login } = useFirebase();

  const value = {
    user,
    login,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const useUser = () => useContext(userContext);
