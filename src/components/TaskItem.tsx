import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../hooks/useTasks';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.taskTextContainer}>
        {task.completed ? (
          <MaterialIcons name="check-circle" size={24} color="#4f46e5" />
        ) : (
          <MaterialIcons name="radio-button-unchecked" size={24} color="#999" />
        )}
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: '#111',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
