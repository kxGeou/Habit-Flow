import User from "../assets/user.png";
import Challenge from "./Challenges";
import { useState } from "react";
import useWindowWidth from "../hooks/UseWindowWidth";
type UserIconPrompts = {
  expLevel?: number;
};

const challenges = [
  {
    exp: 125,
    title: "7-Day Streak Challenge",
    description: "Complete any habit 7 days in a row without missing a day!",
    icon: "🏆",
  },
  {
    exp: 250,
    title: "Habit Mastery Challenge",
    description: "Successfully track 50 completed habits in total.",
    icon: "📅",
  },
  {
    exp: 140,
    title: "3-Habit Power Challenge",
    description:
      "Maintain progress on 3 different habits for at least 10 days.",
    icon: "💪",
  },
];
function UserBar({ expLevel }: UserIconPrompts) {
  return (
    <div className={`flex flex-col justify-center items-center gap-12 `}>
      <img src={User} alt="minimalistic image of user" className="w-[15rem]" />
      <div className="bg-secondary py-3 px-5 w-[25rem] rounded-[12px]">
        <p className="text-textColor font-semibold text-[16px] mb-2">
          John Smith
        </p>
        <p className="text-textColor opacity-50 font-normal text-[14px] mb-2">
          🍬 Beginning Habbiter
        </p>
        <progress
          max="2000"
          value={expLevel}
          className="appearance-none h-[0.75rem] w-full bg-gray-200 
             [&::-webkit-progress-bar]:bg-stroke 
             [&::-webkit-progress-value]:bg-mainColor 
             [&::-moz-progress-bar]:bg-mainColor"
        ></progress>
      </div>
    </div>
  );
}

export default function UserIcon() {
  const width = useWindowWidth();
  const [userExp, setUserExp] = useState<number>(0);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  function handleChallengeClick(index: number, expAmount: number) {
    if (!completedChallenges.includes(index)) {
      setUserExp((prevExp) => Math.min(prevExp + expAmount, 200));
      setCompletedChallenges((prev) => [...prev, index]);
    }
  }

  return (
    <article className="w-full flex justify-between items-end gap-[5rem]">
      {width < 1200 ? "" : <UserBar expLevel={userExp} />}

      <div className="flex flex-col gap-6 text-textColor">
        <p className="font-semibold text-[20px]">Your Challenges:</p>
        {challenges.map((item, index) => {
          const isCompleted = completedChallenges.includes(index);

          return (
            <Challenge
              key={index}
              expAmount={item.exp}
              icon={isCompleted ? "✅" : item.icon}
              title={isCompleted ? `✔ ${item.title} - Completed!` : item.title}
              description={
                isCompleted
                  ? "You've already completed this challenge!"
                  : item.description
              }
              onClick={
                isCompleted
                  ? undefined
                  : () => handleChallengeClick(index, item.exp)
              }
            />
          );
        })}
      </div>
    </article>
  );
}
