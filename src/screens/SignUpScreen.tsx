import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { auth } from '../firebase/config';

interface Props {
  navigation: any;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password)
      return Alert.alert('Error', 'Please enter email and password');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully!');
      navigation.replace('Home');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Task Manager</Text>
          <Text style={styles.subtitle}>Sign Up</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.switchText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  inner: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4f46e5',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  switchText: { color: '#4f46e5', textAlign: 'center', fontSize: 16, marginTop: 10 },
});
