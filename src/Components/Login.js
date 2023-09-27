import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState, useEffect } from "react";


const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Successfully logged in");
      onLoginSuccess();
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Successfully registered");
    } catch (error) {
      console.error("Error registering:", error);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Successfully logged in with Google");
      onLoginSuccess();
    } catch (error) {
      console.error("Error logging in with Google:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded"
      />
      <br />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
      <button onClick={handleGoogleLogin} className="bg-red-500 text-white p-2 rounded ml-4">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
