// App.js
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Login from './components/Login';
import './App.css'; 


export const RoleContext = createContext();

const App = () => {
  const [role, setRole] = useState(""); 

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/teacher"
            element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/student"
            element={role === "student" ? <StudentDashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </RoleContext.Provider>
  );
};

export default App;
