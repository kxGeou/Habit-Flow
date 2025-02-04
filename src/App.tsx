// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Register from './Components/UserPage/Register';
import Login from './Components/UserPage/Login';
import MainFile from './pages/MainFile';
import HabitsList from './Components/UserPage/HabitList';

const App: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Strona główna */}
          <Route path="/" element={<MainFile />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

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
