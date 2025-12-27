import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../src/firebase/config';

import HomeScreen from '../src/screens/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4B7BE5" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
              <Stack.Screen name="Home" component={HomeScreen} />
) : (
  <>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </>
          )}
        </Stack.Navigator>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
});
