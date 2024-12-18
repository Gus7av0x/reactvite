// src/pages/UserEditor.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserEditor = ({ action, origin }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        birthdate: "",
    });
    const navigate = useNavigate();
    const { id } = useParams(); 

    
    useEffect(() => {
        if (action === "edit" && id !== undefined) {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            const userToEdit = storedUsers[id];

            
            if (userToEdit) {
                setUserData(userToEdit);
            } else {
                navigate("/usuarios");
            }
        }
    }, [action, id, navigate]);

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    
    const handleSave = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (action === "edit") {
            
            storedUsers[id] = userData;
            localStorage.setItem("users", JSON.stringify(storedUsers));
            navigate("/usuarios"); 
        } else if (action === "create") {
            
            storedUsers.push(userData);
            localStorage.setItem("users", JSON.stringify(storedUsers));
            navigate(origin === "login" ? "/" : "/usuarios"); 
        }
    };

    
    const handleBack = () => {
        navigate(origin === "login" ? "/" : "/usuarios"); 
    };

    return (
        <div>
            <h2>{action === "edit" ? "Editar Usuário" : "Cadastrar Novo Usuário"}</h2>
            <form onSubmit={handleSave}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">
                    {action === "edit" ? "Salvar Alterações" : "Cadastrar"}
                </button>
            </form>

            {/* Botão para voltar */}
            <button onClick={handleBack} style={styles.backButton}>
                {origin === "login" ? "Voltar ao Login" : "Voltar à Lista de Usuários"}
            </button>
        </div>
    );
};


const styles = {
    backButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        textAlign: "center",
    },
};

export default UserEditor;
