import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/config';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: any;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      setTasks([]);
      return;
    }

    const q = query(
      collection(db, 'users', user.uid, 'tasks'),
      orderBy('createdAt', 'desc')
    );

    const unsub = onSnapshot(q, snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, 'id'>),
      }));
      setTasks(data);
    });

    return unsub;
  }, [user]);

  const addTask = async (text: string) => {
    if (!user) return;

    await addDoc(
      collection(db, 'users', user.uid, 'tasks'),
      {
        text,
        completed: false,
        createdAt: serverTimestamp(),
      }
    );
  };

  const toggleTask = async (id: string, completed: boolean) => {
    if (!user) return;

    await updateDoc(
      doc(db, 'users', user.uid, 'tasks', id),
      { completed: !completed }
    );
  };

  const deleteTask = async (id: string) => {
    if (!user) return;

    await deleteDoc(
      doc(db, 'users', user.uid, 'tasks', id)
    );
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useTasks;
