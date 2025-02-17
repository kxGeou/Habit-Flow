import Navigation from "../Components/Navigation"
import HeroSection from "../Components/HeroSection"
import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"
import Motivation from "../Components/Motivation"
import ShowCase from "../Components/ShowCase"
export default function MainFile() {
  return (
    <div className={`bg-[#171717]`}>
      <main className="max-w-[1150px] flex flex-col m-auto py-8">
        <Navigation></Navigation>
        <div className="flex items-center h-[85vh]">
          <HeroSection></HeroSection>
        </div>
        <p className="text-center text-[1.5rem] text-textColor opacity-50 mb-[12rem]">Take control of your habits</p>
        <div>
          <AboutUs></AboutUs>
        </div>
        <div>
          <ShowCase></ShowCase>
        </div>
        <div>
          <Motivation></Motivation>
        </div> 
          <Footer></Footer>
      </main>
    </div>
  )
}


