import Navigation from "./Components/Navigation"
import HeroSection from "./Components/HeroSection"
import AboutUs from "./Components/AboutUs"
import Footer from "./Components/Footer"
import { Link } from "react-router-dom"
export default function MainFile() {

  return (
    <main className="max-w-[1150px] flex flex-col m-auto py-8">
      <Navigation></Navigation>
      <section className="flex items-center h-[85vh]">
        <HeroSection></HeroSection>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <Link to={"/login"}>Zaloguj się </Link>

      <section>
        <Footer></Footer>
      </section>

{/* 
      <Login onLogin={handleLogin} />
      <Register onRegister={handleRegister} /> */}
    </main>
  )
}


