import React from 'react';
import {Text} from 'react-native';

const Title = props => {
  return (
    <Text
      {...props}
      style={[props.style, {fontFamily: 'JosefinSans-SemiBold'}]}
    />
  );
};

const Subtitle = props => {
  return (
    <Text
      {...props}
      style={[props.style, {fontFamily: 'JosefinSans-Regular'}]}
    />
  );
};

export default {Title, Subtitle};
