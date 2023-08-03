import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import tw from 'twrnc';
import { Text, YoutubeVideo } from '../common';
import { calcWidth } from '../../helpers/dimensions';

const TrainingStep = ({ step }) => {
  const calcWithParams = Platform.OS === 'web' ? { margin: 0, maxWidth: 600, selfCenter: false } : { margin: 0 };
  const width = calcWidth(calcWithParams);

  return (
    <View style={tw`flex-1 bg-slate-900`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw.style(width)}>
          {step.youtubeId && (
            <YoutubeVideo youtubeId={step.youtubeId} darkMode />
          )}
          <View style={tw`p-4`}>
            <Text h2 white>{step.name}</Text>
            <Text bold sm white>{`Aplicar:   ${step.frecuency || 'Todos los días'}`}</Text>
            <Text white style={tw`my-4`}>
              {step.description || step.short}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainingStep;
