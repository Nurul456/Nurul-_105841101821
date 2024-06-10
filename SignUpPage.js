import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Icon name="arrow-forward" size={15} color="red" />
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign up with social account</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/image1.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/image2.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 5,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    fontFamily: './assets/font/Metropolis-Bold', 
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  accountText: {
    fontSize: 13,
    color: 'black',
    marginRight: 5,
    fontFamily: './assets/font/Metropolis-SemiBold', 
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
    fontFamily: './assets/font/Metropolis-SemiBold', 
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 20,
  },
  socialButton: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 30, 
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  orText: {
    fontSize: 13,
    color: 'black',
    marginTop: 50,
    textAlign: 'center',
    fontFamily: './assets/font/Metropolis-SemiBold', 
  },
});
