import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Menggunakan ikon dari react-native-vector-icons

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Forgot Password</Text>
      <Text style={styles.infoText}>Please enter your email address. You will receive a link to create a new password via email.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Not a valid email address. Should be your@email.com</Text>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 1,
    marginTop: 30,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 100,
    fontFamily: './assets/font/Metropolis-Bold', // Mengatur font family
  },
  infoText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    textAlign: 'left',
    color: 'black',
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300, // Lebar tetap dalam piksel
  },
  accountContainer: {
    alignItems: 'center',
  },
  
  accountText: {
    fontSize: 10,
    color: 'red',
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: './assets/font/Metropolis-SemiBold', // Mengatur font family
  },  
  signUpButton: {
    marginTop: 50,
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: './assets/font/Metropolis-SemiBold', // Mengatur font family
  },
});
