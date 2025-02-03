import React, { useState } from "react";

const HabitBlock = () => {
  const [days, setDays] = useState<boolean[]>(Array(35).fill(false));
  const [habitName, setHabitName] = useState<string>("🌠 Example Task");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleNextDay = () => {
    const newDays = [...days];
    const nextIndex = newDays.findIndex((day) => day === false);
    if (nextIndex !== -1) {
      newDays[nextIndex] = true;
      setDays(newDays);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };


  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#1C1B1F] p-6 rounded-[12px] w-[450px] h-[450px]">
        <div className="flex items-center gap-2 mb-6">
        {isEditing ? (
              <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                onBlur={() => setIsEditing(false)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white border-b border-gray-500 focus:outline-none"
                autoFocus
              />
            ) : (
              <div className="flex items-center gap-2 text-white cursor-pointer" onClick={() => setIsEditing(true)}>
                <p className="text-white">{habitName}</p>
              </div>
            )}
        </div>
        <div className="grid grid-cols-7 gap-[16px]">
          {days.map((active, index) => (
            <div
              key={index}
              className={`w-[45px] h-[45px] rounded-md transition-colors ${active ? "bg-green-500" : "bg-gray-700"}`}
            ></div>
          ))}
        </div>
      </div>
      <button
        onClick={toggleNextDay}
        className="bg-[#1c1c1e] text-white w-full p-3 rounded-[12px] flex items-center justify-center hover:bg-gray-800 transition"
      >
        <p className="flex items-center gap-2 text-white">Complete</p>
      </button>
    </div>
  );
};

export default HabitBlock;
