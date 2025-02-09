import useWindowWidth from "../hooks/UseWindowWidth";
import UserIcon from "./UserIcon";

export default function Motivation() {
    const width = useWindowWidth();
    const headerText = {
        title : "Achieve Goals, Earn Rewards!",
        desc : "Every completed habit brings you closer to the next level! Earn points, unlock badges, and become a habit master. Can you keep your streak and collect all the rewards?"
    }
    
    return(
    <section className={`flex flex-col justify-center items-center mt-[12rem] ${width < 850 ? "px-8" : ""}`}>
        <article className="flex flex-col justify-center items-center text-center gap-4 mb-[7rem]">
            <h2 className={` font-semibold  leading-[120%] text-textColor ${width < 850 ? "text-[30px]" : "text-[50px]"}`}>{headerText.title}</h2>
            <p className={`opacity-75  leading-8 w-[50rem] text-textColor ${width < 850 ? "w-full text-[18px]" : "text-[20px]"}`}>{headerText.desc}</p>
        </article>
        <article>
            <UserIcon></UserIcon>
        </article>
    </section>
);
}