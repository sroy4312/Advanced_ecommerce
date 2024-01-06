const userService = require('../services/user.services.js');
const jwtProvider = require('../config/jwtProvider.js');
const cartService = require('../services/cart.services.js');
const bcrypt = require('bcrypt');

const register = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);
        await cartService.createCart(user);
        return res.status(200).send({jwt, message: "Registration successful"})
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if(!user) {
            return res.status(404).send({message: `User not found with email ${email}`})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).send({message: "Invalid username or password"});
        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt, message: "Login successful"});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}


module.exports = { register, login };