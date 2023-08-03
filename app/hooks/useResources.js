import React, { createContext, useContext, useState } from 'react';

export const resourcesContext = createContext();

export const ProvideResources = ({ children }) => {
  const [resources, setResources] = useState([]);

  const value = {
    resources,
    setResources
  };

  return <resourcesContext.Provider value={value}>{children}</resourcesContext.Provider>;
};

export const useResources = () => useContext(resourcesContext);
