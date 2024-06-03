import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Tombol Lupa Kata Sandi ditekan')}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    textAlign: 'left',
    marginTop: 80,
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Menempatkan teks di kiri
    marginBottom: 60, // Memberi jarak antara teks dan kolom input
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
    marginTop: 60,
    width: '100%', // Menyesuaikan lebar tombol dengan kolom input
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
