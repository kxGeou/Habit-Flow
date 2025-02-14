// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import RegisterScreen from './/pages/RegisterScreen'
import Login from './Components/UserPage/Login';
import MainFile from './pages/MainFile';
import HabitsList from './Components/UserPage/HabitList';
import LoginScreen from './pages/LoginScreen';
const App: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const logOut = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => logOut();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Strona główna */}
          <Route path="/" element={<MainFile />} />

          <Route path="/login" element={<LoginScreen />} />

          <Route path="/register" element={<RegisterScreen />} />

          <Route
            path="/habits"
            element={userEmail ? <HabitsList /> : <Login />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
