import React from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import ResourceDetail from '../components/resources/ResourceDetail';

const ResourceDetailScreen = ({ route }) => {
  const { resource } = route.params;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ResourceDetail resource={resource} />
    </SafeAreaView>
  );
};

export default ResourceDetailScreen;
