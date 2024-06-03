import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Judul = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 60,
    padding: 30,
    backgroundColor: 'white',  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

  },
});

export default Judul;
