// src/firebase/firestoreMethods.ts
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';
import { auth } from './firebase';

const getHabits = async () => {
  if (auth.currentUser) {
    // Referencja do kolekcji nawyków użytkownika
    const habitsRef = collection(db, 'users', auth.currentUser.uid, 'habits');
    const q = query(habitsRef);

    try {
      const querySnapshot = await getDocs(q);
      const habits = querySnapshot.docs.map(doc => doc.data());
      return habits;
    } catch (error) {
      console.error('Błąd podczas pobierania nawyków: ', error);
    }
  }
};

export { getHabits };
