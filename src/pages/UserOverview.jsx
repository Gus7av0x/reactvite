// src/pages/UserOverview.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserOverview = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (storedUsers.length === 0) {
            console.log("Nenhum usuário encontrado.");
        }
        setUsers(storedUsers);
    }, []);

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); 
    };

    const handleEdit = (index) => {
        navigate(`/editar/${index}`);
    };

    const formatDate = (date) => {
        if (!date) return "Data inválida";
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <h2>Usuários Cadastrados</h2>
            {users.length === 0 ? (
                <p>Não há usuários cadastrados.</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{formatDate(user.birthdate)}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Editar</button>
                                    <button onClick={() => handleDelete(index)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserOverview;
