
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../App";

const Login = () => {
  const [userRole, setUserRole] = useState(""); 
  const { setRole } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (["admin", "teacher", "student"].includes(userRole.toLowerCase())) {
      setRole(userRole.toLowerCase()); 
      navigate(`/${userRole.toLowerCase()}`);
    } else {
      alert("Invalid role. Please enter admin, teacher, or student.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h1 className="text-4xl font-bold mb-6">EMS Login</h1>
      <input
        type="text"
        className="p-3 mb-4 rounded text-black"
        placeholder="Enter Role (admin, teacher, student)"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-accent text-black px-6 py-2 rounded hover:bg-secondary transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
