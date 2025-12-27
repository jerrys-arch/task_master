import { MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskList from '../components/TaskList';
import { auth } from '../firebase/config';
import useTasks from '../hooks/useTasks';

const HomeScreen: React.FC = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (erro) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Task Manager</Text>

        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Input */}
      <View style={styles.inputCard}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a new task..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Task List */}
     <TaskList
  tasks={tasks}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
/>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: '#4f46e5',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputCard: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addButton: {
    backgroundColor: '#4f46e5',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
