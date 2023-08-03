import React, { useEffect, useState, createContext, useContext } from 'react';
import { useUser } from './useUser';
import { useFirebase } from './useFirebase';
import { useProducts } from './useProducts';

export const trainingsContext = createContext();

export const ProvideTrainings = ({ children }) => {
  const [allTrainings, setAllTrainings] = useState();
  const { collectionLive } = useFirebase();
  const { getProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      loadAllTrainings();
    }
  }, [user]);

  const loadAllTrainings = () => {
    setIsLoading(true);
    const loadCallback = (arr) => {
      setAllTrainings(arr);
      setIsLoading(false);
    };

    collectionLive(loadCallback, 'trainings');
  };

  const getTrainingById = (id) => allTrainings.find((t) => t.id === id);

  const getTrainingByRoutineStep = (step) => {
    const product = getProduct(step.products[0]);
    const training = getTrainingById(product.training);
    return {
      ...training,
      frecuency: product.frecuency,
      short: product.trainingShort,
      description: product.trainingDesc,
    };
  };

  const value = {
    allTrainings,
    setAllTrainings,
    isLoading,
    getTrainingByRoutineStep,
  };

  return <trainingsContext.Provider value={value}>{children}</trainingsContext.Provider>;
};

export const useTrainings = () => useContext(trainingsContext);
