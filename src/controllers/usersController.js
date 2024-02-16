const userModel = require('../models/userModel');

const getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const userId = req.params.userId;
    const user = userModel.getUserById(userId);
    if (!user) {
        res.status(404).json({
            error: 'User not found'
        });
    } else {
        res.status(200).json(user);
    }
};

const createUser = (req, res) => {
    let {
        username,
        age,
        hobbies
    } = req.body;

    // Check if required fields are missing
    if (!username) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s name'
        });
    } else if (!age) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s age'
        });
    } else if (isNaN(age)) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s age in correct format'
        });
    } else if (!hobbies || !Array.isArray(hobbies)) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s hobbies in an array format'
        });
    }
    age = parseInt(age);

    const newUser = {
        username,
        age,
        hobbies,
    };
    const user = userModel.createUser(newUser);
    res.status(201).json(user);
};

const updateUser = (req, res) => {
    const userId = req.params.userId;
    let {
        username,
        age,
        hobbies
    } = req.body;

    // Check if required fields are missing
    if (!username) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s name'
        });
    } else if (!age) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s age'
        });
    } else if (isNaN(age)) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s age in correct format'
        });
    } else if (!hobbies || !Array.isArray(hobbies)) {
        return res.status(400).json({
            error: 'Missing required fields. Please make sure to provide user\'s hobbies in an array format'
        });
    }
    age = parseInt(age);

    const updatedUser = {
        username,
        age,
        hobbies,
    };
    const user = userModel.updateUser(userId, updatedUser);
    if (!user) {
        res.status(404).json({
            error: 'User not found'
        });
    } else {
        res.status(200).json(user);
    }
};

const deleteUser = (req, res) => {
    const userId = req.params.userId;
    const deletedUser = userModel.deleteUser(userId);
    if (!deletedUser) {
        res.status(404).json({
            error: 'User not found'
        });
    } else {
        res.status(200).json({
            message: 'User deleted successfully'
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};