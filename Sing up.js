import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import React from 'react';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Name" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Sign Up pressed')}
      >
        <Text style={styles.buttonText}>SING UP</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => Alert.alert('Sign Up with Google pressed')}
        >
          <Image
            source={require('./assets/icongoogle.png')} // Path relatif ke logo Google
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.iconButton, styles.facebookButton]}
          onPress={() => Alert.alert('Sign Up with Facebook pressed')}
        >
          <Image
            source={require('./assets/facebookicon.png')} // Path relatif ke logo Facebook
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Memusatkan kolom input secara horizontal
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 50,
    textAlign: 'left',
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Menempatkan teks di kiri
    marginBottom: 80, // Memberi jarak antara teks dan kolom input
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 50, // Membuat tombol berbentuk rounded
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 50,
    width: '100%', // Menyesuaikan lebar tombol dengan kolom input
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'space-between',
    width: '80%',
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  
   
  iconImage: {
    width: 50,
    height: 50,
    
  },
});
