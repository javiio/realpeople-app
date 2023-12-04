import React from 'react';
import { View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';
import { Text } from '../common';
import ProductsList from '../products/ProductsList';

const RoutineStepsList = ({ steps }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {steps.map((step) => {
      const filteredProducts = step.products.filter((product) => product);
      return (
        <View key={step.name}>
          <Animatable.View animation="fadeIn" delay={400} style={tw`flex-row`}>
            <Text white style={tw`text-2xl p-4 text-white`}>{step.name}</Text>
            {filteredProducts.length > 1 && (
              <Text white style={tw`mt-5.3 text-gray-400`}>
                {`( ${filteredProducts.length} opciones)`}
              </Text>
            )}
          </Animatable.View>

          <ProductsList products={filteredProducts} />

          {step.desc !== undefined && step.desc !== '' && (
            <Animatable.View animation="fadeIn" delay={400}>
              <Text white sm p>{step.desc}</Text>
            </Animatable.View>
          )}
        </View>
      );
    })}
  </ScrollView>
);

export default RoutineStepsList;
