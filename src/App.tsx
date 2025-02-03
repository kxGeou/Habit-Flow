// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Register from './Components/Register';
import Login from './Components/Login';
import MainFile from './MainFile';
import HabitsList from './Components/HabitList';

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

          {/* Strona logowania */}
          <Route path="/login" element={<Login />} />

          {/* Strona rejestracji */}
          <Route path="/register" element={<Register />} />

          {/* Strona z nawykami */}
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
