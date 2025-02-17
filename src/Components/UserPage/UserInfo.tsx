import React from 'react';

const UserInfo: React.FC<{ userEmail: string, onLogout: () => void }> = ({ userEmail, onLogout }) => {
  return (
    <div>
      <p>Zalogowany jako {userEmail}</p>
      <button onClick={onLogout}>Wyloguj się</button>
    </div>
  );
};

export default UserInfo;
