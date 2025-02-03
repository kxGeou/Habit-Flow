import Navigation from "./Components/MainPage/Navigation"
import HeroSection from "./Components/MainPage/HeroSection"
import AboutUs from "./Components/MainPage/AboutUs"
import Footer from "./Components/MainPage/Footer"
import Motivation from "./Components/MainPage/Motivation"
export default function MainFile() {

  return (
    <main className="max-w-[1150px] flex flex-col m-auto py-8">
      <Navigation></Navigation>
      <div className="flex items-center h-[85vh]">
        <HeroSection></HeroSection>
      </div>
      <div>
        <AboutUs></AboutUs>
      </div>
      <div>
        <Motivation></Motivation>
      </div> 
        <Footer></Footer>
    </main>
  )
}


