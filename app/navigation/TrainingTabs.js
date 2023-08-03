import React, { useLayoutEffect } from 'react';
import tw from 'twrnc';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrainingScreen from '../screens/TrainingScreen';
import { useTrainings } from '../hooks';

const Tab = createMaterialTopTabNavigator();

const TrainingTabs = ({ route, navigation }) => {
  const { level, name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Training ${name}` });
  }, []);

  return (
    <Tab.Navigator
      style={tw`pt-4 bg-slate-800`}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: tw`bg-slate-800`,
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen key="am" name="Mañana" component={TrainingScreen} initialParams={{ level, routine: 'am' }} />
      <Tab.Screen key="pm" name="Noche" component={TrainingScreen} initialParams={{ level, routine: 'pm' }} />
    </Tab.Navigator>
  );
};

export default TrainingTabs;
