import Description from "../Components/ui/Description";
import Tutorial from "./Tutorial";

export default function AboutUs(){
    return(
        <section className="my-[6rem] flex justify-between items-center">
            <Description title="Take control of your habits" description="HabitFlow helps you track daily habits, stay consistent, and achieve your goals. Customize your habit blocks, visualize progress, and build a better routine—one day at a time"></Description>
            <Tutorial></Tutorial>
        </section>
    )
}