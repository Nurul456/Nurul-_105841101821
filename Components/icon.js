import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = ({ type }) => {
  let iconSource;
  if (type === 'google') {
    iconSource = require('../assets/icongoogle.png'); // path ke gambar Google
  } else if (type === 'facebook') {
    iconSource = require('../assets/facebookicon.png'); // path ke gambar Facebook
  }

  return <Image source={iconSource} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    margin: 10,
  },
});

export default Icon;
