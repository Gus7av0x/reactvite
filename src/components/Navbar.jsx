// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  
  const user = JSON.parse(localStorage.getItem("user"));

  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); 
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h1></h1>
      {}
      {user ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "20px" }}>Bem-vindo, {user.name}!</span>
          <button
            onClick={handleLogout}
            style={{
              padding: "5px 10px",
              cursor: "pointer",
              marginLeft: "10px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <span>Usuário não conectado.</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
