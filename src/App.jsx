import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Use HashRouter aqui
import Navbar from "./components/Navbar";
import LoginScreen from "./pages/LoginScreen";
import UserEditor from "./pages/UserEditor";
import UserOverview from "./pages/UserOverview";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route
            path="/cadastro"
            element={<UserEditor action="create" origin="login" />}
          />
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute>
                <UserOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <ProtectedRoute>
                <UserEditor action="edit" origin="users" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
