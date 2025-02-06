import Description from "../Components/ui/Description";
import Tutorial from "./Tutorial";
import { useState, useRef, useEffect } from "react";
export default function AboutUs() {
    const ref = useRef<HTMLElement | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      if (!ref.current) return; 
  
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
  
      observer.observe(ref.current);
      console.log(isIntersecting);
      return () => observer.disconnect();
    }, [ref.current]);

  return (
      <section className="my-[6rem] flex justify-between items-center " ref={ref}>
        <Description
          title="Take control of your habits"
          description="HabitFlow helps you track daily habits, stay consistent, and achieve your goals. Customize your habit blocks, visualize progress, and build a better routine—one day at a time"
        ></Description>
        <Tutorial></Tutorial>
      </section>
  );
}
