import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useUser } from '../../hooks';
import { Text } from '../common';

const ResourceListItem = ({ resource }) => {
  const { navigate } = useNavigation();
  const { user } = useUser();

  const getIconName = () => {
    switch (resource.type) {
      case 'document':
        return 'library-books';
      case 'image':
        return 'collections';
      case 'video':
        return 'video-library';
      default:
        return 'library-books';
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigate('resource', { resource, user: user.id })}
      style={tw`bg-white px-2 py-4 border-b border-gray-300 flex-row items-center`}
    >
      <Icon name={getIconName()} color="#312e81" size={19} style={tw`mt-1`} />
      <View style={tw`mx-2 flex-1`}>
        <Text bold sm>{resource.name}</Text>
        <Text sm>{resource.short}</Text>
      </View>
      <Icon name="arrow-forward-ios" color="#999" size={19} />
    </TouchableOpacity>
  );
};

export default ResourceListItem;
