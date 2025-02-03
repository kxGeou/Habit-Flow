// src/firebase/firestoreMethods.ts
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { auth } from './firebase';

const addHabit = async (habitName: string) => {
  if (auth.currentUser) {
    // Referencja do dokumentu użytkownika
    const userRef = doc(db, 'users', auth.currentUser.uid);
    // Kolekcja nawyków użytkownika
    const habitsRef = collection(userRef, 'habits');

    const habitData = {
      name: habitName,
      createdAt: new Date(),
    };

    try {
      // Tworzymy dokument w kolekcji habits
      await setDoc(doc(habitsRef, habitName), habitData);
      console.log('Nawyka została dodana');
    } catch (error) {
      console.error('Błąd podczas dodawania nawyku: ', error);
    }
  }
};

export { addHabit };
