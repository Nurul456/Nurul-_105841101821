import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();

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
      <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Icon name="arrow-forward" size={20} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('forgotPassword')}>
        <Text style={styles.signUpButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or login with social account</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/image1.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/image2.png')} style={styles.socialIcon} />
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
    marginBottom: 20,
    textAlign: 'flex-start',
    fontFamily: './assets/font/Metropolis-Bold',
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  accountText: {
    fontSize: 17,
    color: 'black',
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 120,
    alignSelf: 'center',
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
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  orText: {
    fontSize: 16,
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
});
