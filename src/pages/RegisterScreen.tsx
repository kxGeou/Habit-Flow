import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Cat from "../assets/cat.svg";
import { Link } from "react-router-dom";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/habits");
    } catch (error) {
      setError("Błąd rejestracji. Spróbuj ponownie.");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center  ">
      <div className="  flex flex-col p-8 justify-start items-center h-[75%] w-[50%] rounded-[12px] border-2 border-[#1C1B1F]">
        <img src={Cat} alt="cat image" className="w-[15rem]"/>
        <h2 className="font-bold text-[2rem] my-[2rem]">Register</h2>
        <form onSubmit={handleRegister} className="gap-4 flex flex-col w-[100%] justify-center items-center">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#1C1B1F] p-2 rounded-[8px] w-[50%]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#1C1B1F] p-2 rounded-[8px] w-[50%]"
          />
          <div className="flex flex-col items-center gap-4 mt-6 w-[100%]">
            <button type="submit" className="bg-[#1C1B1F] w-[50%] text-white h-[3.5rem] rounded-[12px]">Zarejestruj się</button>
            <Link to="/login" className="font-semibold opacity-75">I already have account</Link>
          </div>
        </form>
        {error && <p className="text-red-700 mt-4 font-semibold text-[1.25]">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
