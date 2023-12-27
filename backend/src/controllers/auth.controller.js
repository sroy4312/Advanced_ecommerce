// This controller is only for login and signup
const { createUser, getUserByEmail } = require('../services/user.services.js');
const { generateToken } = require('../config/jwtProvider.js');
const { createCart } = require('../services/cart.services.js');
const bcrypt = require('bcrypt');

const register = async(req, res) => {
    try {
        const user = await createUser(req.body);
        const jwt = generateToken(user._id);
        await createCart(user);
        return res.status(200).send({jwt, message: "Registered successfully"});
    } catch (e) {
        return res.status(500).send({error: e.message});
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if(!user) {
            return res.status(404).send({message: `User not found with email ${email}`})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).send({message: "Invalid username or password"})
        }
        const jwt = generateToken(user._id);
        return res.status(200).send({jwt, message: "Login successful"})
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

module.exports = { register, login };