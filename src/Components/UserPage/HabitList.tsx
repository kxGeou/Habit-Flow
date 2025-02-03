// src/components/HabitsPage.tsx
import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { collection, addDoc, query,  getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const HabitList: React.FC = () => {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // Załadowanie nawyków po zalogowaniu użytkownika
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);  // Przechowujemy UID użytkownika
        loadHabits(user.uid);  // Ładujemy nawyki z Firestore
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Funkcja ładowania nawyków z Firestore
  const loadHabits = async (userId: string) => {
    try {
      const habitsRef = collection(db, 'users', userId, 'habits');
      const q = query(habitsRef);
      const querySnapshot = await getDocs(q);
      const habitsList: string[] = [];
      querySnapshot.forEach((doc) => {
        habitsList.push(doc.data().habit);
      });
      setHabits(habitsList);
    } catch (error) {
      console.error("Błąd podczas ładowania nawyków: ", error);
    }
  };

  // Funkcja dodawania nawyku do Firestore
  const handleAddHabit = async () => {
    if (habit.trim() && userId) {
      try {
        // Dodajemy nawyk do Firestore
        await addDoc(collection(db, 'users', userId, 'habits'), {
          habit: habit,
        });
        // Po dodaniu nawyku ładujemy je ponownie
        loadHabits(userId);
        setHabit(''); // Czyścimy pole input
      } catch (error) {
        console.error("Błąd podczas dodawania nawyku: ", error);
      }
    }
  };

  return (
    <div>
      <h2>Twoje nawyki</h2>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Dodaj nowy nawyk"
      />
      <button onClick={handleAddHabit}>Dodaj nawyk</button>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>{habit}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
