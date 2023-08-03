import React from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import ProductDetail from '../components/products/ProductDetail';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <ProductDetail product={product} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
