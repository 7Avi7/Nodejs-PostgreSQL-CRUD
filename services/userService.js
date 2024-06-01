// services/userService.js
const UserModel = require("../models/userModel");

const createUser = async (name, email, age) => {
  return await UserModel.createUser(name, email, age);
};

const getUsers = async () => {
  return await UserModel.getUsers();
};

const getUserById = async (id) => {
  return await UserModel.getUserById(id);
};

const updateUser = async (id, name, email, age) => {
  return await UserModel.updateUser(id, name, email, age);
};

const deleteUser = async (id) => {
  return await UserModel.deleteUser(id);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
