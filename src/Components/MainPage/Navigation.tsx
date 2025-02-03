import { Link } from "react-router-dom"
export default function Navigation() {
  return (
    <nav className="flex justify-between">
      <article className={`bg-[#1C1B1F] h-[42px] w-[72px] rounded-[8px]`}></article>
      <section className="flex items-center justify-between gap-[2rem]">
        <a href="#">About</a>
        <div className="bg-[#1C1B1F] h-full flex justify-center items-center text-white rounded-[24px] w-[142px]">
            <Link to={"/register"}>Register</Link>
        </div>
      </section>
    </nav>
  )
}


