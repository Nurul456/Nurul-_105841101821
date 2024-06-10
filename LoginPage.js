import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Menggunakan ikon dari react-native-vector-icons

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
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
        <Text style={styles.accountText}>Or sign up with social account?</Text>
        <Icon name="arrow-forward" size={15} color="red" />
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Login</Text>
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
    fontFamily: './assets/font/Metropolis-Bold', // Mengatur font family
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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Mengatur posisi elemen di tengah
    marginTop: 20,
  },
  socialButton: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 30, // Mengurangi jarak antar tombol
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
