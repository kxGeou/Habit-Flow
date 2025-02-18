import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/firebase";
import { collection, addDoc, getDocs, updateDoc, doc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

interface Habit {
  id: string;
  name: string;
  daysCompleted: number;
  completedCycles: number;
  lastCompleted: Timestamp | null;
}

const HabitCard: React.FC<{ habit: Habit; onComplete: (id: string) => void; onEdit: (id: string, newName: string) => void }> = ({ habit, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const handleSave = () => {
    if (newName.trim()) {
      onEdit(habit.id, newName);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-secondary p-4 rounded-[12px] text-textColor " >
      <div className="flex flex-col justify-between mb-2">
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="text-textColor bg-secondaryBox p-1 rounded h-[3rem]"
          />
        ) : (
          <div>
            <div className="flex justify-between items-center">
          🔥{habit.daysCompleted} 

            <span className="font-semibold text-[1.75rem] text-center">{habit.name}</span>
            </div>
              <span className="flex justify-center gap-2 font-semibold text-[1.5rem]">
            </span>
          </div>
        )}
              <button onClick={(e) => { e.stopPropagation(); isEditing ? handleSave() : setIsEditing(true); }} className="text-textColor opacity-75 rounded-[8px]">
                {isEditing ? "Save" : "Edit"}
              </button>
        
        </div>

      <div className="grid grid-cols-7 gap-3 mt-8" >
        {[...Array(35)].map((_, index) => (
          <div key={index} className={`w-[45px] h-[45px] rounded-md ${index < habit.daysCompleted ? "bg-mainColor  shadow-[rgba(7,_65,_210,_0.1)_0px_0px_10px] shadow-mainColor" : "bg-[#171717]"}`} />
        ))}
      </div>
      <button className="bg-[#171717] p-3 rounded-[8px] border border-transparent transition-all duration-500 mt-4 w-full hover:border hover:border-mainColor" onClick={() => onComplete(habit.id)}>Complete</button>
      
    </div>
  );
};




const HabitsPage: React.FC = () => {
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState<Habit[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        loadHabits(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadHabits = async (userId: string) => {
    try {
      const habitsRef = collection(db, "users", userId, "habits");
      const querySnapshot = await getDocs(habitsRef);
      const habitsList: Habit[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Habit[];

      setHabits(habitsList);
    } catch (error) {
      console.error("Błąd podczas ładowania nawyków:", error);
    }
  };

  const handleAddHabit = async () => {
    if (habitName.trim() && userId) {
      try {
        const newHabit = {
          name: habitName,
          daysCompleted: 0,
          completedCycles: 0,
          lastCompleted: null,
        };
        const docRef = await addDoc(collection(db, "users", userId, "habits"), newHabit);
        setHabits([...habits, { id: docRef.id, ...newHabit }]);
        setHabitName("");
      } catch (error) {
        console.error("Błąd podczas dodawania nawyku:", error);
      }
    }
  };

  const handleCompleteHabit = async (habitId: string) => {
    const habitIndex = habits.findIndex((habit) => habit.id === habitId);
    if (habitIndex === -1) return;

    const habit = habits[habitIndex];

    const today = new Date().toDateString();
    const lastCompletedDate = habit.lastCompleted ? new Date(habit.lastCompleted.toDate()).toDateString() : null;

    if (lastCompletedDate === today) {
      alert("Już dzisiaj ukończyłeś ten nawyk!");
      return;
    }

    let updatedHabit = { ...habit };
    updatedHabit.daysCompleted += 1;
    updatedHabit.lastCompleted = Timestamp.now();

    if (updatedHabit.daysCompleted >= 35) {
      updatedHabit.daysCompleted = 0; 
      updatedHabit.completedCycles += 1;
    }

    const updatedHabits = [...habits];
    updatedHabits[habitIndex] = updatedHabit;
    setHabits(updatedHabits);

    await updateDoc(doc(db, "users", userId!, "habits", habitId), {
      daysCompleted: updatedHabit.daysCompleted,
      completedCycles: updatedHabit.completedCycles,
      lastCompleted: updatedHabit.lastCompleted,
    });
  };

  const handleEditHabit = async (habitId: string, newName: string) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId ? { ...habit, name: newName } : habit
    );
    setHabits(updatedHabits);

    await updateDoc(doc(db, "users", userId!, "habits", habitId), {
      name: newName,
    });
  };

  return (
    <div className="h-[100vh] bg-[#171717]">
      <div className="p-6 text-white bg-[#171717]">
        <div className="max-w-[1150px] flex flex-col justify-start items-center m-auto">
          <h2 className="text-2xl font-bold mb-4">Your Habits</h2>
          <div className="mb-4 flex gap-2 w-[75%] ">
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Dodaj nowy nawyk"
              className=" p-4 rounded-[8px] w-full bg-secondary "
            />
            <button onClick={handleAddHabit} className="bg-mediumDark text-white p-2 rounded-lg w-[15%]">Add Habit</button>
          </div>
          <div className="flex flex-wrap gap-4 w-full justify-center mt-12">
            {habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} onComplete={handleCompleteHabit} onEdit={handleEditHabit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsPage;
