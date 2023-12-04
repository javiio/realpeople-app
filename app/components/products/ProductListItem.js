import React, { useRef } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import tw from 'twrnc';
import { Text, Button } from '../common';
import { useProducts, useUser, useConfig } from '../../hooks';

const ProductListItem = ({ id }) => {
  const { user } = useUser();
  const { getProduct } = useProducts();
  const { config } = useConfig();
  const { navigate } = useNavigation();
  const product = useRef(getProduct(id)).current;
  if (!product) {
    return <View />;
  }

  const sendWhatsapp = () => {
    const linkText = `Hola :), quiero comprar "${product.name}" - ${product.price} bs. (Usuario ${user.id}).`;
    const link = encodeURI(`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${linkText}`);

    if (Platform.OS === 'web') {
      window.open(link, '_blank');
    } else {
      Linking.openURL(link);
    }
  };

  const showDetails = () => navigate('product', { product, user: user.id });

  const textNoWrapStyle = Platform.OS === 'web' ? { whiteSpace: 'nowrap' } : {};

  return (
    <View>
      <TouchableOpacity onPress={showDetails}>
        <Image
          source={{ uri: product.cover }}
          style={tw`w-full h-40`}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={tw`p-2 overflow-hidden`}>
        <TouchableOpacity onPress={showDetails}>
          <Text h2 style={tw.style('mb-0 pb-0 h-6', textNoWrapStyle)}>
            {product.name}
          </Text>
        </TouchableOpacity>
        <Text style={tw`text-xs -mt-1 mb-0 text-violet-600`}>{product.company}</Text>
        {/* <Text style={tw`text-sm text-gray-500 h-12 overflow-hidden pt-1`}>{product.desc}</Text> */}
        <View style={tw`h-9 mt-4`}>
          {product.price && product.available && (
            <View style={tw`flex-row`}>
              <View style={tw`flex-row bg-violet-50 w-20 px-2 mb-2`}>
                <Text semibold style={tw`text-xl text-violet-600 mr-1`}>{product.price}</Text>
                <Text style={tw`mt-0.5 text-violet-600`}>bs.</Text>
              </View>

              {product.regularPrice && product.regularPrice > product.price && (
                <Text sm style={tw`ml-2 mt-1 line-through`}>{`${product.regularPrice} bs.`}</Text>
              )}
            </View>
          )}
        </View>

        <View style={tw`flex-row w-full justify-between`}>
          <Button
            title={product.available ? 'Comprar' : 'No disponible'}
            disabled={!product.available}
            small
            buttonStyle={tw`w-32 bg-blue-400`}
            onPress={sendWhatsapp}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductListItem;
