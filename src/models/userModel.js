const { v4: uuidv4 } = require('uuid');

let users = [];

const getAllUsers = () => {
  return users;
};

const getUserById = (userId) => {
  return users.find(user => user.id === userId);
};

const createUser = (newUser) => {
  const user = { id: uuidv4(), ...newUser };
  users.push(user);
  return user;
};

const updateUser = (userId, updatedUser) => {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  }
  return null;
};

const deleteUser = (userId) => {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    const deletedUser = users[index];
    users = users.filter(user => user.id !== userId);
    return deletedUser;
  }
  return null;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};