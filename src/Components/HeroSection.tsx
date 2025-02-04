import Description from "../Components/ui/Description"
import Button from "../Components/ui/Button"
import Hero from '../assets/hero.svg';

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex flex-col justify-start items-start gap-7">
        <Description title="HabitFlow" description="A simple way to track your habits and build a better you"></Description>
        <Button title="Get Started"></Button>
      </div>
      <div>
        <img src={Hero} className="w-[25rem]"></img>
      </div>
    </section>
  )
}

