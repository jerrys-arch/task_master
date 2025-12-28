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
    } catch {
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
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Task Manager</Text>
          <Text style={styles.headerSubtitle}>Stay organized</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{tasks.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{tasks.filter(t => !t.completed).length}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{tasks.filter(t => t.completed).length}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputCard}>
          <MaterialIcons name="add" size={20} color="#4f46e5" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="What needs to be done?"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add Task</Text>
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
  },
  header: {
    backgroundColor: '#4f46e5',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 32,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 12,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '600',
  },
  inputContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 16,
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    paddingVertical: 0,
  },
  addButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
