import React, { useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../hooks';
import { Text } from '../components/common';

const RoutinesListScreen = ({ navigation }) => {
  const { user } = useUser();
  const { navigate } = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Rutinas' });
  }, []);

  const selectRoutineLevel = (level, name) => {
    navigate('routine', { level, name, user: user.id });
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <TouchableOpacity onPress={() => selectRoutineLevel(1, 'básica')}>
        <View style={tw`mt-8 mx-2 mb-4 bg-sky-500 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Rutina básica</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectRoutineLevel(2, 'intermedia')}>
        <View style={tw`mx-2 mb-4 bg-sky-600 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Rutina intermedia</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectRoutineLevel(3, 'avanzada')}>
        <View style={tw`mx-2 mb-4 bg-sky-700 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Rutina avanzada</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectRoutineLevel(4, 'experta')}>
        <View style={tw`mx-2 mb-4 bg-sky-800 p-8 rounded`}>
          <Text white style={tw`text-xl`}>Rutina experta</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RoutinesListScreen;
