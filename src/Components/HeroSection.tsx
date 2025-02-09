import Button from "../Components/ui/Button";
import useWindowWidth from "../hooks/UseWindowWidth";
import Habit from "./ui/Habit";
export default function HeroSection() {

  const width = useWindowWidth()

  return (
    <section className={`transition-all duration-300 flex items-center  w-full ${width < 1300 ? "px-8" : ""}  ${width < 1000 ? "justify-center" : "justify-between"}`} >
        <div className={`transition-all duration-300 flex flex-col justify-center items-start w-[50%]  ${width < 1000 ? "w-full" : ""}`}>
          <h1 className={`transition-all duration-300 text-textColor font-medium text-[40px] mb-2 ${width < 500 ? "text-[30px]" : ""}`}>Turn Daily Actions into <span className="font-black text-mainColor">Lifelong Habits</span> with Ease</h1>
          <p className={`transition-all duration-300 text-[22px]   text-textColor opacity-75 mb-12 ${width < 500 ? "text-[18px]" : ""}`}>Track habits effortlessly, stay consistent, and unlock rewards for your progress. Build better routines with HabitFlow!</p>
          <Button title="Get Started" width={20}></Button>
        </div>
        {width < 1000 ? "" : <Habit></Habit>}
    </section>
  );
}
