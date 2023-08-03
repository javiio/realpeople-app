import React, { useState, createContext, useContext, useEffect } from 'react';
import { useFirebase } from './useFirebase';

export const configContext = createContext();

export const ProvideConfig = ({ children }) => {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { db, doc } = useFirebase();

  useEffect(() => {
    if (db) {
      loadConfig();
    }
  }, [db]);

  const loadConfig = async () => {
    setIsLoading(true);
    const c = await doc('');
    setConfig(c);
    setIsLoading(false);
  };

  const value = {
    config,
    isLoading,
  };

  return <configContext.Provider value={value}>{children}</configContext.Provider>;
};

export const useConfig = () => useContext(configContext);
