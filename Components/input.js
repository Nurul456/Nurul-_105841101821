import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
