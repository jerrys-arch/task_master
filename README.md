Task Manager Mobile App

A modern, user-friendly task management mobile app built with React Native, Firebase, and Expo. Track your daily tasks, toggle completion, sort by date, and manage your personal tasks securely with Firebase authentication.

📱 Features

User Authentication

Sign up & login using Firebase Authentication

Persistent user sessions

Task Management

Add, delete, and toggle task completion

Tasks stored per user in Firestore

Sort tasks by date

UI/UX

Modern and responsive design

Keyboard avoiding input fields

Dark mode toggle (planned / optional)

Search functionality (planned / optional)

Navigation

Welcome screen with app title & description

Login & SignUp screens

Home screen with user-specific tasks

🛠️ Tech Stack

Frontend: React Native, Expo

Backend / Database: Firebase Authentication, Firestore

State Management: React Hooks

Navigation: React Navigation (Stack Navigator)

Styling: React Native Stylesheets

🚀 Getting Started
Prerequisites

Node.js ≥ 18

Expo CLI

Firebase project set up

Clone the repository
git clone https://github.com/<username>/<repo>.git
cd task-manager-mobile

Install dependencies
npm install

Run the app
expo start


Open the app on:

iOS: Expo Go app

Android: Expo Go app or emulator

Web: http://localhost:8081

📁 Project Structure
task-manager-mobile/
│
├─ src/
│  ├─ assets/           # Images and icons
│  ├─ firebase/         # Firebase config & utils
│  ├─ hooks/            # Custom hooks (useTasks)
│  ├─ screens/          # App screens (Home, Login, SignUp, Welcome)
│  └─ components/       # UI components (TaskList)
│
├─ App.tsx              # Main app entry with Stack Navigator
└─ package.json

⚡ Usage

Open the app

Signup or login

Add tasks

Toggle completion or delete tasks

Tasks are synced per user in Firebase Firestore

🎨 Design

Modern and minimal design

Welcome screen with app icon, title, and description

Responsive buttons and input fields

Keyboard-aware input fields on mobile

🔧 Future Improvements

Dark mode support

Search bar to filter tasks

Sorting tasks by different criteria (priority, custom date)

Notifications for pending tasks

Offline mode support

📄 License

This project is MIT licensed.
