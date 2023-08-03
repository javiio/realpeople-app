import React from 'react';
import { ScrollView, View, Image, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import tw from 'twrnc';
import { Text, Button } from '../common';
import { useUser, useConfig } from '../../hooks';
import { calcWidth } from '../../helpers/dimensions';

const ProductDetail = ({ product }) => {
  const { user } = useUser();
  const { config } = useConfig();

  const sendWhatsapp = () => {
    const linkText = `Hola, quiero comprar "${product.name}" - ${product.price} bs. (Usuario ${user.id}).`;
    const link = encodeURI(`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${linkText}`);

    if (Platform.OS === 'web') {
      window.open(link, '_blank');
    } else {
      Linking.openURL(link);
    }
  };

  const widthStyle = calcWidth({ margin: 0 });
  const imageWidth = Math.min(widthStyle.width, widthStyle.maxWidth);
  const imageHeight = (imageWidth * 3) / 4;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw.style(widthStyle)}>
        <Image
          source={{ uri: product.cover }}
          style={tw.style('w-full', { height: imageHeight })}
          resizeMode="cover"
        />

        <View style={tw`p-2 overflow-hidden`}>
          <Text white h1 style={tw``}>
            {product.name}
          </Text>

          {product.company && (
            <Text style={tw`text-xs -mt-1 mb-0 text-violet-200`}>
              {`MARCA: ${product.company}`}
            </Text>
          )}

          <View style={tw`py-2`}>
            {product.price && product.available && (
              <View style={tw`flex-row`}>
                <View style={tw`flex-row bg-violet-50 w-20 px-2 mb-2`}>
                  <Text semibold style={tw`text-xl text-violet-600 mr-1`}>{product.price}</Text>
                  <Text style={tw`mt-0.5 text-violet-600`}>bs.</Text>
                </View>

                {product.regularPrice && product.regularPrice > product.price && (
                  <Text sm white style={tw`ml-2 mt-1 line-through`}>{`${product.regularPrice} bs.`}</Text>
                )}
              </View>
            )}
          </View>
          <Text style={tw`pt-2`} white>{product.desc}</Text>

          <View style={tw`my-4`}>
            <Button
              title={product.available ? 'Comprar' : 'No disponible'}
              disabled={!product.available}
              buttonStyle={tw`bg-blue-400`}
              onPress={sendWhatsapp}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
