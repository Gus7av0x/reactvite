// src/pages/LoginScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   
    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/usuarios");
        } else {
            alert("Email ou senha incorretos!");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Entrar
                    </button>
                </form>
                <p style={styles.footerText}>
                    Não tem uma conta?{" "}
                    <span
                        style={styles.link}
                        onClick={() => navigate("/cadastro")} 
                    >
                        Cadastre-se aqui
                    </span>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    card: {
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        boxSizing: "border-box",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    label: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "8px",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },
    button: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        textAlign: "center",
    },
    footerText: {
        marginTop: "20px",
        fontSize: "14px",
        color: "#777",
        textAlign: "center",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export default LoginScreen;
