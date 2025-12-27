import React from 'react';
import { View } from 'react-native';
import { Task } from '../hooks/useTasks';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string, completed: boolean) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  deleteTask,
}) => {
  return (
    <View>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id, task.completed)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </View>
  );
};

export default TaskList;
