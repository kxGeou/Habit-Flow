import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import Cat from "../assets/cat.svg";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col p-8 justify-start items-center h-[75%] w-[50%] rounded-[12px] border-2 border-[#1C1B1F]">
        <img src={Cat} alt="cat image" className="w-[15rem]" />
        <h2 className="font-bold text-[2rem] my-[2rem]">Register</h2>
        <form onSubmit={handleRegister} className="gap-4 flex flex-col w-[100%] justify-center items-center">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-[#1C1B1F] p-2 rounded-[8px] w-[50%]"
          />
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
            <button type="submit" className="bg-[#1C1B1F] w-[50%] text-white h-[3.5rem] rounded-[12px]">
              Zarejestruj się
            </button>
            <Link to="/login" className="font-semibold opacity-75">
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
