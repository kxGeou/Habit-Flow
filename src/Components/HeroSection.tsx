import Description from "../Components/ui/Description"
import Button from "../Components/ui/Button"
import Hero from '../assets/hero.svg';
import { motion } from "framer-motion";
export default function HeroSection() {



  return (
    <section className="flex items-center justify-between w-full ">
      <div className="flex flex-col justify-start items-start gap-7">
        <Description title="HabitFlow" description="A simple way to track your habits and build a better you"></Description>
        <Button title="Get Started"></Button>
      </div>
      <div>
        <motion.img
          width={450}
          src={Hero}
          alt="Illustration"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </section>
  )
}

