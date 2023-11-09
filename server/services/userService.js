const User = require('../models/User.model');

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const getAllUsers = async () => {
    return await User.find();
};

const deleteUserById = async (userId) => {
    return await User.deleteOne({_id: userId});
};

module.exports = {
    createUser,
    getAllUsers,
    deleteUserById
};
