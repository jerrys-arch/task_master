import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  navigation: any;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* App Icon */}
      <Image
        source={require('../../assets/task-icon.png')} // Add your icon in assets
        style={styles.icon}
      />

      {/* App Title */}
      <Text style={styles.title}>Task Manager</Text>

      {/* App Description */}
      <Text style={styles.description}>
        Organize your tasks efficiently, stay focused, and never miss a deadline!
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4f46e5',
  },
  signUpText: {
    color: '#4f46e5',
  },
});
