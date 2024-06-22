import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordPage() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Forgot Password</Text>
      <Text style={styles.infoText}>Please enter your email address. You will receive a link to create a new password via email.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    width: 300,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 40,
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
});
 