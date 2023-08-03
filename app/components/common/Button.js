import React from 'react';
import { Button as RNButton } from '@rneui/themed';
import tw from 'twrnc';

const Button = ({ type, small, buttonStyle, ...props }) => {
  const clear = type === 'clear';

  const bStyle = tw.style(
    buttonStyle,
    !clear && 'bg-blue-500',
    small && 'p-1',
  );

  const titleStyle = tw.style(
    small && 'text-sm',
    small && { fontFamily: 'Montserrat-Bold', fontWeight: 'bold' },
  );

  return (
    <RNButton
      type={type}
      titleStyle={titleStyle}
      buttonStyle={bStyle}
      {...props}
    />
  );
};

export default Button;
