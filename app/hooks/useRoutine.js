import React, { createContext, useContext, useState } from 'react';

export const routineContext = createContext();

export const ProvideRoutine = ({ children }) => {
  const [steps, setSteps] = useState();

  const value = {
    steps,
    setSteps,
  };

  return <routineContext.Provider value={value}>{children}</routineContext.Provider>;
};

export const useRoutine = () => useContext(routineContext);
