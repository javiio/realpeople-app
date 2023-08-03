import React from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import ResourcesList from '../components/resources/ResourcesList';
import { useResources } from '../hooks';

const ResourcesScreen = () => {
  const { resources } = useResources();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ResourcesList resources={resources} />
    </SafeAreaView>
  );
};

export default ResourcesScreen;
