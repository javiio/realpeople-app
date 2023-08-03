import React from 'react';
import { View } from 'react-native';
import { calcWidth } from '../../helpers/dimensions';

const YoutubeVideo = ({ youtubeId }) => {
  const widthStyle = calcWidth({ margin: 0, maxWidth: 600 });
  const width = widthStyle.width < 600 ? widthStyle.width : 600;
  const height = (width * 9) / 16;

  return (
    <View>
      <iframe
        title="Youtube"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        style={{ border: 'none' }}
      />
    </View>
  );
};

export default YoutubeVideo;
