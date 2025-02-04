import Navigation from "../Components/Navigation"
import HeroSection from "../Components/HeroSection"
import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"
import Motivation from "../Components/Motivation"
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


