import React from 'react';
import { View, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'twrnc';
import * as Linking from 'expo-linking';
import Text from './Text';

const { width } = Dimensions.get('window');
const height = (width * 9) / 16;

const YoutubeVideo = ({ youtubeId, darkMode = false }) => (
  <View>
    <View style={tw.style(`${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`, { height })}>
      <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator />
      </View>

      <YoutubePlayer
        height={height}
        play
        videoId={youtubeId}
      />
    </View>

    <Text xs style={tw`mt-1 pl-2 italic ${darkMode ? 'text-gray-100' : 'text-gray-500'}`}>
      Si no puedes ver el video
      <Text
        xs
        style={tw`text-blue-500`}
        onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${youtubeId}`)}
      >
        {' haz click aqui'}
      </Text>
    </Text>
  </View>
);

export default YoutubeVideo;
