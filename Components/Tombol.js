import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Tombol = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity>
      <View style={{
        backgroundColor: backgroundColor,
        borderRadius: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex- end',
        marginLeft: 10,
        marginBottom: 70,
        padding: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 50,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 50,
          lineHeight: 20,
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tombol;
