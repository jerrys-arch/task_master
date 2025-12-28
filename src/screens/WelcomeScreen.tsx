import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  navigation: any;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.iconTitleRow}>
          <Image source={require('../../assets/task-icon.png')} style={styles.icon} />
          <Text style={styles.title}>Task Manager</Text>
        </View>
        <Text style={styles.description}>
          Organize your tasks efficiently, stay focused, and never miss a deadline!
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  headerSection: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 32,
    height: 240,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    maxWidth: 340,
    width: '100%',
  },
  iconTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#4f46e5',
    lineHeight: 36,
    flexShrink: 1,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 340,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#4f46e5',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4f46e5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  secondaryButtonText: {
    color: '#4f46e5',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
