import { Link } from "react-router-dom"
import Logo from "../assets/logoooo.png";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <img src={Logo} alt="Logo of our company" />
      <section className="flex items-center justify-between gap-[2rem]">
        <a href="#" className="transition-all duration-300 opacity-[75%] border-b-2 border-b-transparent text-white hover:opacity-100 hover:border-b-stroke ">About</a>
        <Link to={"/register"} className="cursor-pointer bg-button/10 h-[3rem] border border-stroke flex justify-center items-center text-white rounded-[12px] w-[142px] transition-all duration-500 hover:rounded-[24px]">Register</Link>
      </section>
    </nav>
  )
}


