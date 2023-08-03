import React from 'react';
import { Text as RNText } from 'react-native';
import tw from 'twrnc';

const Text = ({ style, white, dark, center, bold, semibold, h1, h2, sm, xs, subtitle, p, ...props }) => {
  const styles = tw.style(
    { fontFamily: 'Montserrat' },
    bold && { fontFamily: 'Montserrat-Bold', fontWeight: 'bold' },
    semibold && { fontFamily: 'Montserrat-SemiBold', fontWeight: '600' },
    'text-base text-gray-700 font-bold',
    white && { color: 'white' },
    dark && 'text-gray-600',
    center && 'text-center',
    h1 && 'text-xl text-center mb-4',
    h2 && 'text-base font-semibold text-gray-600 mb-2',
    h2 && { fontFamily: 'Montserrat-SemiBold' },
    sm && 'text-sm',
    xs && 'text-xs',
    subtitle && 'text-sm text-gray-500 -mt-2 mb-2',
    p && 'p-2',
    style,
  );

  return (
    <RNText
      style={styles}
      {...props}
    />
  );
};

export default Text;
