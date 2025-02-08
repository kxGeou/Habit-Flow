import useWindowWidth from "../hooks/UseWindowWidth";
type aboutUsWrapperProps = {
  title : string;
  description : string;
}

export default function AboutUs() {
  const width = useWindowWidth();
  const data = [ 
    {
      title: "What is HabitFlow?",
      description: "HabitFlow helps you track daily habits, stay consistent, and achieve your goals. Customize your habit blocks, visualize progress, and build a better routine—one day at a time"
    },
    {
      title: "Designed for Efficiency",
      description: "With an intuitive interface, customizable features, and a sleek design, staying on top of your daily routines has never been easier. Start small, stay consistent, and see real progress over time!"
    }
  ]

  function AboutUsWrapper({title, description}: aboutUsWrapperProps) {
    return (
      <div className={`w-[35%] bg-secondary p-[2rem] rounded-[12px] text-textColor ${width < 1200 ? "w-[75%]" : ""}`}>
        <div className="flex gap-2 items-center mb-8">
          <div className="rounded-full h-3 w-3 bg-mainColor"></div>
          <div className="rounded-full h-3 w-3 bg-mediumDark"></div>
          <div className="rounded-full h-3 w-3 bg-darkMain"></div>
        </div>
        <h2 className="w-full text-[1.75rem] mb-2">{title}</h2>
        <p className="w-full opacity-75 text-[18px]">{description}</p>
      </div>
    )
  }

  return (
      <section className={`transition-all w-full duration-300 flex justify-between items-center ${width < 1200 ? "flex-col gap-12": ""}`}>
        {data.map((item, index) => (
          <AboutUsWrapper key={index} title={item.title} description={item.description}></AboutUsWrapper>
        ))}
      </section>
  );
}
