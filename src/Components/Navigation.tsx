import { Link } from "react-router-dom";
import Logo from "../assets/logoooo.png";
import useWindowWidth from "../hooks/UseWindowWidth";
import { FaUser } from "react-icons/fa";
export default function Navigation() {
  const width = useWindowWidth();
  console.log(width);
  return (
    <nav
      className={`${
        width < 1200 ? "px-[5%]" : ""
      } flex justify-between items-center`}
    >
      <img src={Logo} alt="Logo of our company" />
      <section className="flex items-center justify-between gap-[2rem]">
        <a
          href="#"
          className="transition-all duration-300 opacity-[75%] border-b-2 border-b-transparent text-white hover:opacity-100 hover:border-b-stroke "
        >
          About
        </a>
        {width > 800 ? (
          <Link
            to={"/register"}
            className="cursor-pointer bg-button/10 h-[3rem] border border-stroke flex justify-center items-center text-white rounded-[12px] w-[142px] transition-all duration-500 hover:rounded-[24px]"
          >
            Register
          </Link>
        ) : (
          <Link
            to={"/register"}
            className="cursor-pointer bg-button/10 h-[3rem] border border-stroke flex justify-center items-center text-white rounded-full w-[3rem] transition-all duration-500 hover:rounded-[24px]"
          >
            <FaUser fill="#f0f0f0" />
          </Link>
        )}
      </section>
    </nav>
  );
}
