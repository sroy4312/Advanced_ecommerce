const userService = require('../services/user.services.js');

const getUserProfile = async(req, res) => {
    const jwt = req.headers.authorization?.split(" ")[1];
    console.log("req ", jwt);
    try {
        if(!jwt) {
            return res.status(404).send({error: "Token not found"});
        }
        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).send({user});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = { getUserProfile, getAllUsers };