// src/services/api.js

let users = []; // Simulação de banco de dados em memória

// Adicionar um novo usuário
export const addUser = (user) => {
  if (!user.name || !user.email || !user.password || !user.birthDate) {
    throw new Error("Todos os campos são obrigatórios para criar um usuário.");
  }
  const newUser = { ...user, id: users.length + 1 };
  users.push(newUser);
};

// Retornar todos os usuários
export const getUsers = () => {
  return users;
};

// Buscar usuário por ID
export const getUserById = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error(`Usuário com ID ${id} não encontrado.`);
  }
  return user;
};

// Atualizar um usuário existente
export const updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error(`Usuário com ID ${id} não encontrado.`);
  }

  if (!updatedUser.name && !updatedUser.email && !updatedUser.password && !updatedUser.birthDate) {
    throw new Error("Pelo menos um campo deve ser fornecido para atualizar.");
  }

  users[index] = { ...users[index], ...updatedUser };
};

// Deletar um usuário
export const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error(`Usuário com ID ${id} não encontrado.`);
  }
  users.splice(index, 1);
};
