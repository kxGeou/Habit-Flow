import React, { useState } from 'react';
import { addHabit } from '../../addHabit.tsx';

const AddHabbit: React.FC = () => {
  const [habitName, setHabitName] = useState('');
  const [error, setError] = useState('');

  const handleAddHabit = async () => {
    if (habitName.trim()) {
      try {
        await addHabit(habitName);  // Dodajemy nowy nawyk
        setHabitName('');  // Resetujemy pole tekstowe
        setError('');  // Resetujemy ewentualny błąd
      } catch (error) {
        setError('Błąd podczas dodawania nawyku');
      }
    } else {
      setError('Wpisz nazwę nawyku');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Nazwa nawyku"
      />
      <button onClick={handleAddHabit}>Dodaj nawyk</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddHabbit;
