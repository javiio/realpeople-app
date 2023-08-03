import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import tw from 'twrnc';
import { Text, YoutubeVideo } from '../common';
import { calcWidth } from '../../helpers/dimensions';

const ResourceDetail = ({ resource }) => {
  const widthStyle = calcWidth({ margin: 0, maxWidth: 600 });
  const width = widthStyle.width < 600 ? widthStyle.width : 600;
  const height = (width * 9) / 16;

  const renderContentBlock = (block) => {
    switch (block.type) {
      case 'text':
        return <Text style={tw`px-2`}>{block.content}</Text>;
      case 'image':
        return (
          <Image
            source={{ uri: block.content }}
            style={{ width, height }}
          />
        );
      case 'youtube':
        return <YoutubeVideo youtubeId={block.content} />;
      default:
        return <View />;
    }
  };

  return (
    <ScrollView>
      <View style={tw.style('bg-white py-4', widthStyle)}>
        <Text h1>{resource.name}</Text>
        {resource.content?.map((block, i) => (
          <View key={i} style={tw`mb-4`}>
            {renderContentBlock(block)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ResourceDetail;
