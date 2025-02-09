import React, { useState } from "react";
import useWindowWidth from "../../hooks/UseWindowWidth";

const   Habit = () => {
  const [days, setDays] = useState<string[]>(Array(35).fill("gray"));
  const [habitName, setHabitName] = useState<string>("🌠 Example Task");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const width = useWindowWidth()

  const toggleNextDay = (color: string) => {
    const newDays = [...days];
    const nextIndex = newDays.findIndex((day) => day === "gray");
    if (nextIndex !== -1) {
      newDays[nextIndex] = color;
      setDays(newDays);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex justify-between items-center gap-6 ${width < 1200 ? "flex-col gap-16" : ""}`}>

      <div className="bg-secondary rounded-[12px] ">
        <div className="flex items-center rounded-ss-[12px] rounded-se-[12px] p-8 gap-2  bg-secondary">
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
            <div
              className="flex items-center gap-2 text-white cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <p className="text-white text-[1.25rem]">{habitName}</p>
              <p className="text-white opacity-50 ml-5">Edit</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-7 gap-[16px] px-8 pb-8  my-2">
          {days.map((color, index) => (
            <div
              key={index}
              className={` bg-[#171717] w-[38px] h-[38px] rounded-md transition-all duration-500 shadow-[rgba(7,_65,_210,_0.1)_0px_0px_10px] ${
                color === "green"
                  ? "bg-mainColor shadow-mainColor "
                  : color === "red"
                  ? "bg-red-500"
                  : "bg-[#171717]"
              } `}
            ></div>
          ))}
        </div>
        <button
          onClick={() => toggleNextDay("green")}
          className="bg-[#434348] text-white w-full rounded-br-[12px] rounded-bl-[12px]  p-6 flex items-center justify-center hover:bg-gray-800 transition"
        >
          <p className="flex items-center gap-2 text-white">Completed</p>
        </button>
      </div>

    </div>
  );
};

export default Habit;
