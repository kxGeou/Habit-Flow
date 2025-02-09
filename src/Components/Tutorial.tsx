import React, { useState, useCallback } from "react";
import User from "../assets/user.png";
import useWindowWidth from "../hooks/UseWindowWidth";

type UserProps = {
  userExp: number;
};

const UserBar = React.memo(({ userExp, streak }: { userExp: number, streak: number }) => {

  const width = useWindowWidth();
  return (
    <div className={`flex flex-col w-[50%] justify-center items-center gap-12 ${width < 1200 ? "w-full" : ""}`}>
      <img
        src={User}
        alt="minimalistic image of user"
        className={`w-[15rem] ${width < 750 ? "w-[7.5rem]" : ""}`}
      />
      <div className={`bg-secondary py-3 px-5 w-full rounded-[12px] ${width < 750 ? "w-[19rem]" : ""}`}>
        <div className="flex justify-between">
          <div>
            <p className="text-textColor font-semibold text-[20px] mb-2">
              John Smith
            </p>
            <p className="text-textColor opacity-50 font-normal text-[16px] mb-2">
              🍬 Beginning Habbiter
            </p>
          </div>
          <p className={`text-textColor ${streak > 0 ? "block" : "hidden"}`}>{streak}🔥</p>
        </div>
        <progress
          max="2000"
          value={userExp}
          className="appearance-none h-[0.75rem] w-full bg-gray-200  
             [&::-webkit-progress-bar]:bg-stroke 
             [&::-webkit-progress-value]:bg-mainColor 
             [&::-moz-progress-bar]:bg-mainColor"
        ></progress>
      </div>
    </div>
  );
});

const DayBlock = React.memo(({ color }: { color: string }) => {

  const width = useWindowWidth()
  return (
    <div
      className={`bg-[#171717] ${color === "green" ? "bg-mainColor shadow-mainColor" : "bg-[#171717]"} rounded-md transition-all duration-500 shadow-[rgba(7,_65,_210,_0.1)_0px_0px_10px]  ${width < 700 ? "w-[35px] h-[35px]" : "w-[45px] h-[45px]"}`}
    ></div>
  );
});

const HabitBlock = () => {
  const [days, setDays] = useState<string[]>(Array(35).fill("gray"));
  const [habitName, setHabitName] = useState<string>("🌠 Example Task");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [userExp, setUserExp] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const width = useWindowWidth();

  const toggleNextDay = useCallback((color: string) => {
    const newDays = [...days];
    const nextIndex = newDays.findIndex((day) => day === "gray");
    setUserExp((prevExp) => Math.min(prevExp + 10, 200));
    setStreak(streak + 1); 
    if (nextIndex !== -1) {
      newDays[nextIndex] = color;
      setDays(newDays);
    }
  }, [days, streak]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex justify-between w-full items-center gap-12 ${width < 1200 ? "flex-col gap-16 px-6" : ""}`}>
      <UserBar userExp={userExp} streak={streak} />

      <div className={`bg-secondary rounded-[12px] ${width < 530 ? "w-full" : ""}`}>
        <div className="flex items-center rounded-ss-[12px] rounded-se-[12px] p-6 gap-2  bg-secondary">
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

        <div className="grid grid-cols-7 gap-[16px] p-6 my-4">
          {days.map((color, index) => (
            <DayBlock key={index} color={color} />
          ))}
        </div>

        <button
          onClick={() => toggleNextDay("green")}
          className="bg-[#434348] text-white w-full rounded-br-[12px] rounded-bl-[12px] p-6 flex items-center justify-center hover:bg-gray-800 transition"
        >
          <p className="flex items-center gap-2 text-white">Completed</p>
        </button>
      </div>
    </div>
  );
};

export default HabitBlock;
