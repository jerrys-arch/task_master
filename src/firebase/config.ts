import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyARNEEC7_rBVePhfFdz-Gig1JXFUJdW52I',
  authDomain: 'taskmanagermobile-a5988.firebaseapp.com',
  projectId: 'taskmanagermobile-a5988',
  storageBucket: 'taskmanagermobile-a5988.firebasestorage.app',
  messagingSenderId: '421128771048',
  appId: '1:421128771048:web:ea586171477145d189005d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);