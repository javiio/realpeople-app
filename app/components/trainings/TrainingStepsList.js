import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useUser } from '../../hooks';
import { Text } from '../common';
import { calcWidth } from '../../helpers/dimensions';

const TrainingStepsList = ({ steps, routine }) => {
  const { navigate } = useNavigation();
  const { user } = useUser();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text white h1 style={tw`my-6`}>
        {`Training ${routine.toUpperCase()}`}
      </Text>
      {steps.map((step) => (
        <TouchableOpacity
          onPress={() => navigate('trainingStep', { step, user: user.id })}
          key={step.name}
          style={tw.style(
            'bg-white rounded-lg mb-4 mx-4 flex-row overflow-hidden h-28',
            calcWidth(),
          )}
        >
          <View style={tw`relative`}>
            <Image
              source={{ uri: `https://i3.ytimg.com/vi/${step.youtubeId}/maxresdefault.jpg` }}
              style={tw`w-32 h-28`}
            />
            <View style={tw`absolute inset-0 justify-center opacity-80`}>
              <Icon name="play-circle-outline" color="white" size={64} />
            </View>
          </View>

          <View style={tw`p-2 flex-1`}>
            <View style={tw`h-20 overflow-hidden`}>
              <Text h2 style={tw`mb-1 leading-none text-lg`}>{step.name}</Text>
              <Text sm>{step.short}</Text>
            </View>

            <Text bold style={tw`text-violet-500`}>
              {step.frecuency || 'Todos los días'}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TrainingStepsList;
