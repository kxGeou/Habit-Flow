import UserIcon from "./UserIcon";

export default function Motivation() {

    const headerText = {
        title : "Achieve Goals, Earn Rewards!",
        desc : "Every completed habit brings you closer to the next level! Earn points, unlock badges, and become a habit master. Can you keep your streak and collect all the rewards?"
    }
    
    return(
    <section className="flex flex-col justify-center items-center mt-[12rem]">
        <article className="flex flex-col justify-center items-center text-center gap-4 mb-[7rem]">
            <h2 className={`text-[50px] font-semibold  leading-[120%] text-textColor`}>{headerText.title}</h2>
            <p className={`opacity-75 text-[20px] leading-8 w-[50rem] text-textColor`}>{headerText.desc}</p>
        </article>
        <article>
            <UserIcon></UserIcon>
        </article>
    </section>
);
}