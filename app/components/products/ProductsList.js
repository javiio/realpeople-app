import React from 'react';
import { FlatList, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';
import ProductListItem from './ProductListItem';

const ProductsList = ({ products }) => {
  const renderItem = ({ item, index }) => (
    <Animatable.View animation="fadeInRight" delay={200 * (index + 1)} style={tw`m-2 w-60 bg-white h-74`}>
      <ProductListItem id={item} />
    </Animatable.View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
    />
  );
};

export default ProductsList;
