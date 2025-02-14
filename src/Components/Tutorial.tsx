import React, { useState, useCallback } from "react";
import User from "../assets/user.png";
import useWindowWidth from "../hooks/UseWindowWidth";

type UserProps = {
  userExp: number;
};

const UserBar = React.memo(({ userExp, streak }: { userExp: number, streak: number }) => {

  const width = useWindowWidth();
  return (
    <div className={`flex flex-col w-[50%] justify-center items-center gap-12 ${width < 1200 ? "w-[70%]" : ""} `}>
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

const HabitBlock = () => {
  const width = useWindowWidth();
  return (
    <div className={`flex justify-center w-full items-center gap-12 ${width < 1200 ? "flex-col gap-16 px-6" : ""}`}>
      <UserBar userExp={200} streak={6} />
    </div>
  );
};

export default HabitBlock;
