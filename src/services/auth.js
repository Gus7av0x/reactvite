// src/services/auth.js

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "password123";

// Simula uma autenticação de login
export const login = (email, password) => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

// Verifica se o usuário está autenticado
export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

// Faz logout
export const logout = () => {
  localStorage.removeItem("isAuthenticated");
};
