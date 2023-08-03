import React from 'react';
import { View } from 'react-native';
import { Input as RNInput } from '@rneui/themed';
import tw from 'twrnc';
import Text from './Text';

const Input = ({ multiline, label, labelWhite, subtitle, ...props }) => {
  const labelStyle = tw.style();

  return (
    <View>
      {label && (
        <Text h2 white={labelWhite}>{label}</Text>
      )}

      {subtitle && (
        <Text subtitle>{subtitle}</Text>
      )}

      <RNInput
        containerStyle={tw`p-0`}
        labelStyle={tw`text-base font-semibold text-gray-600`}
        inputStyle={tw`font-normal text-gray-700 p-2`}
        inputContainerStyle={tw`bg-gray-50 rounded border border-gray-200`}
        multiline={multiline}
        numberOfLines={multiline && 3}
        maxHeight={multiline && 90}
        minHeight={multiline && 90}
        {...props}
      />
    </View>
  );
};

export default Input;
