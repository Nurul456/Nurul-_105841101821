import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style }) => {
  return <Text style={[{ fontSize: 16, color: '#333' }, style]}>{children}</Text>;
};

export default CustomText;
