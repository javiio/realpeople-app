import React, { useState, createContext, useContext, useEffect } from 'react';
import { useFirebase } from './useFirebase';
import { useUser } from './useUser';

export const sectionsContext = createContext();

export const ProvideSections = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userCollectionLive } = useFirebase();
  const { user } = useUser();

  const loadSections = () => {
    setIsLoading(true);

    const loadCallback = (arr) => {
      arr.sort((a, b) => a.position - b.position);
      setSections(arr);
      setIsLoading(false);
    };
    userCollectionLive(loadCallback, 'sections');
  };

  useEffect(() => {
    if (user) {
      loadSections();
    }
  }, [user]);

  const value = {
    sections,
    section,
    setSection,
    isLoading,
  };

  return <sectionsContext.Provider value={value}>{children}</sectionsContext.Provider>;
};

export const useSections = () => useContext(sectionsContext);
