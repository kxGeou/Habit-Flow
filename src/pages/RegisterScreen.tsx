import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Logo from '../assets/logoooo.png';
import useWindowWidth from "../hooks/UseWindowWidth";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const width = useWindowWidth();
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!username.trim()) {
      setError("Podaj nazwę użytkownika!");
      return;
    }
  
    try {
      console.log("🔄 Rejestracja rozpoczęta...");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("✅ Użytkownik zarejestrowany:", user);
  
      // Zapisujemy użytkownika w Firestore
      console.log("📂 Dodaję użytkownika do Firestore...");
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        createdAt: new Date().toISOString(),
      });
  
      console.log("🎉 Użytkownik zapisany w Firestore!");
      navigate("/habits");
    } catch (error: any) {
      console.error("🚨 Błąd rejestracji:", error.code, error.message);
      if (error.code === "auth/email-already-in-use") {
        setError("Ten email jest już używany.");
      } else if (error.code === "auth/weak-password") {
        setError("Hasło musi mieć co najmniej 6 znaków.");
      } else if (error.code === "auth/invalid-email") {
        setError("Nieprawidłowy format adresu email.");
      } else {
        setError(`Błąd: ${error.message}`);
      }
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
        <h2  className={`text-[1.25rem] mb-[1.5rem] font-semibold text-center ${width > 850 ? "text-[2rem]" : ""} `}>Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#171717] p-4 rounded-[8px]"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#171717] p-4 rounded-[8px]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#171717] p-4 rounded-[8px]"
          />
          <div className="flex flex-col items-center gap-4 mt-6 w-[100%]">
            <button type="submit"  className="bg-button/10 border border-stroke rounded-[8px] w-full h-[2.75rem] flex items-center justify-center">
              Zarejestruj się
            </button>
            <Link to="/login"className="text-button">
              I already have an account
            </Link>
          </div>
        </form>
        {error && <p className="text-red-700 mt-4 font-semibold">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
