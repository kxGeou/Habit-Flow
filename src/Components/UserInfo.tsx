// src/components/UserInfo.tsx
import React from 'react';
import { auth } from '../firebase';

const UserInfo: React.FC<{ userEmail: string, onLogout: () => void }> = ({ userEmail, onLogout }) => {
  return (
    <div>
      <p>Zalogowany jako {userEmail}</p>
      <button onClick={onLogout}>Wyloguj się</button>
    </div>
  );
};

export default UserInfo;
