const UserService = require('../services/userService');

const postUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const result = await UserService.deleteUserById(req.params.id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.json({ message: 'Resource deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    postUser,
    getUsers,
    deleteUser
};
