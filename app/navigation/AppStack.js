import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SurveyScreen from '../screens/SurveyScreen';
import RoutineTabs from './RoutineTabs';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import RoutinesListScreen from '../screens/RoutinesListScreen';
import TrainingTabs from './TrainingTabs';
import TrainingStepScreen from '../screens/TrainingStepScreen';
import TrainingsListScreen from '../screens/TrainingsListScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ResourceDetailScreen from '../screens/ResourceDetailScreen';
import WaitingScreen from '../screens/WaitingScreen';

const Stack = createNativeStackNavigator();

export const linking = {
  // prefixes: ['https://app.pamecastellon.com'],
  config: {
    screens: {
      login: 'login',
      home: ':user/home',
      survey: ':user/survey',
      routinesList: ':user/routinesList',
      routine: ':user/routine',
      product: ':user/product',
      trainingsList: ':user/trainingsList',
      training: ':user/training',
      trainingStep: ':user/trainingStep',
      resources: ':user/resources',
      resource: ':user/resource',
      waiting: ':user/waiting',
    },
  },
};

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{ headerTransparent: true, headerShown: false }}
    />

    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={{ headerTransparent: true, headerShown: false }}
    />

    <Stack.Screen
      name="survey"
      component={SurveyScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="routinesList"
      component={RoutinesListScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="routine"
      component={RoutineTabs}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="product"
      component={ProductDetailScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800`, title: '' }}
    />

    <Stack.Screen
      name="trainingsList"
      component={TrainingsListScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="training"
      component={TrainingTabs}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="trainingStep"
      component={TrainingStepScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="resources"
      component={ResourcesScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="resource"
      component={ResourceDetailScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />

    <Stack.Screen
      name="waiting"
      component={WaitingScreen}
      options={{ headerTintColor: '#fff', headerStyle: tw`bg-slate-800` }}
    />
  </Stack.Navigator>
);

export default AppStack;
