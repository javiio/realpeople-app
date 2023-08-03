import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFirebase } from './useFirebase';
import { useUser } from './useUser';

export const productsContext = createContext();

export const ProvideProducts = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState();
  const { collectionLive } = useFirebase();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      loadAllProducts();
    }
  }, [user]);

  const loadAllProducts = () => {
    setIsLoading(true);
    const loadCallback = (arr) => {
      setAllProducts(arr);
      setIsLoading(false);
    };

    collectionLive(loadCallback, 'products');
  };

  const getProduct = (id) => allProducts.find((p) => p.id === id);

  const value = {
    isLoading,
    products,
    setProducts,
    getProduct,
  };

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};

export const useProducts = () => useContext(productsContext);
