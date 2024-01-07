const jwtProvider = require('../config/jwtProvider.js');
const userService = require('../services/user.services.js');


const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split("")[1];
        if(!token) {
            return res.status(404).send({error: "Token not found"});
        }
        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);
        req.user = user;
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
    next();
}

module.exports = authenticate;