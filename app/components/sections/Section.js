import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { Text } from '../common';
import { useSections, useUser } from '../../hooks';
import { calcWidth } from '../../helpers/dimensions';

const Section = ({ section }) => {
  const { navigate } = useNavigation();
  const { setSection } = useSections();
  const { user } = useUser();

  const handleOnPress = () => {
    setSection(section);

    if (section.isEmpty) {
      navigate('waiting', { user: user.id });
      return;
    }

    switch (section.type) {
      case 'survey':
        navigate('survey', { user: user.id });
        break;
      case 'routines':
        navigate('routinesList', { user: user.id });
        break;
      case 'trainings':
        navigate('trainingsList', { user: user.id });
        break;
      case 'resources':
        navigate('resources', { user: user.id });
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={tw.style(
        'my-3 h-36 rounded overflow-hidden flex-row',
        section.color,
        calcWidth(),
      )}
    >
      <View>
        <Text bold style={tw`text-9xl font-bold -m-1.5 opacity-25 w-21`}>
          {section.position && section.position}
        </Text>
      </View>
      <View style={tw`flex-1 p-2`}>
        <Text bold white style={tw`text-3xl text-gray-100`} numberOfLines={1}>{section.name}</Text>
        <Text white style={tw`text-gray-100`}>{section.short}</Text>
      </View>
      {section.finished && (
        <>
          <View style={tw`absolute right-0 p-2 mr-2 bg-green-700 rounded-b`}>
            <Icon name="check" color="white" size={21} />
          </View>

          {section.inReview && (
            <View style={tw`absolute bottom-0 ml-20 mb-1.5 bg-gray-500 px-2 py-0.5 rounded flex-row`}>
              <Icon name="assignment" color="white" size={19} />
              <Text sm white style={tw`ml-1`}>En revisión</Text>
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Section;
