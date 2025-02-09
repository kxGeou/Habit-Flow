// src/components/Login.tsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../assets/logoooo.png';
import useWindowWidth from "../hooks/UseWindowWidth";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const width = useWindowWidth();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/habits");
    } catch (error) {
      setError("Błąd logowania. Sprawdź swoje dane.");
    }
  };

  return (
    <div className="bg-[#171717] h-[100vh] flex justify-center items-center p-12">
      <div className="bg-secondary p-8 w-full flex flex-col justify-start items-center text-textColor rounded-[12px] h-[75%] max-h-[35rem] max-w-[40rem]">
        <div className="flex w-full item-center justify-between gap-2 mb-[3rem]">
          <div className="flex gap-2 items-center">
            <Link to="/" className={`bg-mainColor flex flex-col justify-center items-center rounded-full h-[0.75rem] w-[0.75rem] ${width > 850 ? "h-[1rem] w-[1rem]" : ""}`}></Link>
            <span className={`bg-mediumDark flex flex-col justify-center items-center rounded-full h-[0.75rem] w-[0.75rem] ${width > 850 ? "h-[1rem] w-[1rem]" : ""}`}></span>
            <span className={`bg-darkMain flex flex-col justify-center items-center rounded-full h-[0.75rem] w-[0.75rem] ${width > 850 ? "h-[1rem] w-[1rem]" : ""}`}></span>
          </div>
            <img src={Logo} alt="vector of our company" />          
        </div>
        <h2 className={`text-[1.25rem] font-semibold text-center ${width > 850 ? "text-[2rem]" : ""} `}>Ready to get back on track?</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full mt-12"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#171717] p-4 rounded-[8px]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#171717] p-4 rounded-[8px]"
          />
          <div className="flex flex-col justify-center items-center gap-8 mt-4">
            <button
              type="submit"
              className="bg-button/10 border border-stroke rounded-[8px] w-full h-[2.75rem] flex items-center justify-center"
            >
              Login
            </button>
            <Link to="/register" className="text-button">
              I dont have account
            </Link>
          </div>
        </form>
        {error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
