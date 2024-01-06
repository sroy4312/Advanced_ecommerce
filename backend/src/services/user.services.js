const User = require('../models/user.model.js');
const brcypt = require('bcrypt');
const jwtProvider = require('../config/jwtProvider.js');

const createUser = async(userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({email});
        if(isUserExist) {
            throw new Error(`User already exists with the email ${email}`);
        }
        const salt = 10;
        password = await brcypt.hash(password, salt);
        const user = await User.create({firstName, lastName, email, password});
        console.log("Created user ", user);
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}

const findUserById = async(userId) => {
    try {
        const user = await User.findById(userId)
        //.populate("address");
        if(!user) {
            throw new Error(`User not found with id ${userId}`);
        }
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}

const getUserByEmail = async(email) => {
    try {
        const user = await User.findOne({email});
        if(!user) {
            throw new Error(`User not found with email ${email}`);
        }
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}

const getUserProfileByToken = async(token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user) {
            throw new Error(`User not found with id ${userId}`);
        }
        console.log(user);
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}

const getAllUsers = async() => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers };