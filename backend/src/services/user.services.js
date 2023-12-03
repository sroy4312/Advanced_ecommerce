const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExists = await User.findOne(email);
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
        const user = await User.findById(userId);
        if(!user) {
            throw new Error("User not found with id: ", userId);
        }
        return user;
    }catch(e) {
        throw new Error(e.message);
    }
}

const findUserByEmail = async(email) => {
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

    }catch(e) {

    }
}

module.exports = { createUser, findUserById, findUserByEmail };