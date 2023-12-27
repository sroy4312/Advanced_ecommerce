const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const { getUserIdFromToken } = require('../config/jwtProvider.js');

const createUser = async(userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExists = await User.findOne({email});
        if(isUserExists) {
            throw new Error("User already exists with the registered email: ", email);
        }
        password = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        });
        console.log("created user", user);
        return user;
    }catch(e) {
        throw new Error(e.message);
    }
}

const findUserById = async(userId) => {
    try {
        const user = await User.findById(userId)
        //.populate("address");
        if(!user) {
            throw new Error("User not found with id: ", userId);
        }
        return user;
    }catch(e) {
        throw new Error(e.message);
    }
}

const getUserByEmail = async(email) => {
    try {
        const user = await User.findOne({email});
        if(!user) {
            throw new Error("User not found with email: ", email);
        }
        return user;
    }catch(e) {
        throw new Error(e.message);
    }
}

const getUserProfileByToken = async(token) => {
    try {
        const userId = getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user) {
            throw new Error("User not found with id: ", userId)
        }
        console.log("User: ", user);
        return user;
    }catch(e) {
        throw new Error(e.message);
    }
}

const getAllUsers = async() => {
    try {
        const users = await User.find();
        return users;
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers };