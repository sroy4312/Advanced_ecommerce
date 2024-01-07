const cartItemService = require('../services/cartItem.services.js');


const updateCartItem = async(req, res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(200).send({updatedCartItem});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const removeCartItem = async(req, res) => {
    const user = req.user;
    try {
        await cartItemService.removeCartItem(user._id, req.params.id);
        return res.status(200).send({message: "Cart item removed successfully."});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = { updateCartItem, removeCartItem };