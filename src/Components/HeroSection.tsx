import Button from "../Components/ui/Button";
import { IoIosArrowDown } from "react-icons/io";
import useWindowWidth from "../hooks/UseWindowWidth";
export default function HeroSection() {

  const width = useWindowWidth()

  return (
    <section className="flex  flex-col items-center justify-center w-full">
      <h1 className={`transition-all duration-300 text-textColor font-extrabold leading-[110%] ${width < 750 ? "text-[5rem]" : "text-[7rem]"} ${width < 450 ? "text-[4rem]" : ""}`}>
        HabitFlow
      </h1>
      <p className={`transition-all duration-300 text-textColor mb-12 opacity-75 font-light ${width < 750 ? "text-[1rem]" : "text-[1.3rem]"} ${width < 450 ? "text-[0.75rem]" : ""}`}>
        A simple way to track your habits and build a better you
      </p>

      <Button title="Get Started" width={20} height={3}></Button>
      <div className="p-4 bg-button/10 border border-stroke rounded-full animate-bounce mt-[3rem]">
        <IoIosArrowDown fill="#676767" />
      </div>
    </section>
  );
}
