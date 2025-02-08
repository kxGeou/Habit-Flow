import Button from "../Components/ui/Button";
import { IoIosArrowDown } from "react-icons/io";

export default function HeroSection() {
  return (
    <section className="flex  flex-col items-center justify-center w-full">
      <h1 className="text-textColor font-extrabold text-[7rem] leading-[110%]">
        HabitFlow
      </h1>
      <p className="text-textColor mb-12 opacity-75 font-light text-[1.3rem]">
        A simple way to track your habits and build a better you
      </p>

      <Button title="Get Started" width={20} height={3}></Button>
      <div className="p-4 bg-button/10 border border-stroke rounded-full animate-bounce mt-[3rem]">
        <IoIosArrowDown fill="#676767" />
      </div>
    </section>
  );
}
