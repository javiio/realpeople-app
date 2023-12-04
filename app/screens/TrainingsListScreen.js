import React, { useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../hooks';
import { Text } from '../components/common';

const TrainingsListScreen = ({ navigation }) => {
  const { user } = useUser();
  const { navigate } = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Skincare Training' });
  }, []);

  const selectTraining = (level, name) => {
    navigate('training', { level, name, user: user.id });
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <TouchableOpacity onPress={() => selectTraining(1, 'básico')}>
        <View style={tw`mt-8 mx-2 mb-4 bg-indigo-500 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Training básico</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectTraining(2, 'intermedio')}>
        <View style={tw`mx-2 mb-4 bg-indigo-600 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Training Intermedio</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectTraining(3, 'avanzado')}>
        <View style={tw`mx-2 mb-4 bg-indigo-700 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Training Avanzado</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectTraining(4, 'experto')}>
        <View style={tw`mx-2 mb-4 bg-indigo-800 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Training Experto</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TrainingsListScreen;
