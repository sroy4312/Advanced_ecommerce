const { getUserProfileByToken, getAllUsers } = require('../services/user.services.js');

const getUserController = async(req, res) => {
    const jwt = req.headers.authorization?.split(" ")[1];
    console.log("req: ", jwt);
    try {
        if(!jwt) {
            return res.status(404).send({error: "Token not found"});
        }
        const user = await getUserProfileByToken(jwt);
        return res.status(200).send(user);
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

const GetAllUsers = async(req, res) => {
    try {
        const users = await getAllUsers();
        return res.status(200).send(users);
    } catch (e) {
        return res.status(500).ssend({error: e.message});
    }
}

module.exports = { getUserController, GetAllUsers };