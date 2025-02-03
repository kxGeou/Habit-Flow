import Navigation from "./Components/Navigation"
import HeroSection from "./Components/HeroSection"
import AboutUs from "./Components/AboutUs"
export default function App() {
  return (
    <main className="max-w-[1150px] flex flex-col m-auto py-8">
      <Navigation></Navigation>
      <section className="flex items-center h-[85vh]">
        <HeroSection></HeroSection>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      
    </main>
  )
}


