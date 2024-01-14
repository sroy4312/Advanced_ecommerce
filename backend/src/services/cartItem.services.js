const CartItem = require('../models/cartitem.model.js');
const userService = require('./user.services.js');


const updateCartItem = async(userId, cartItemId, cartItemData) => {
    try {
        const item = await findCartItemById(cartItemId);
        /*if(!item) {
            throw new Error(`Cart item not found with id ${cartItemId}`);
        }*/
        const user = await userService.findUserById(item.userId);
        if(!user) {
            throw new Error(`User not found with userid ${userId}`);
        }
        if(user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }else {
            throw new Error("You can't update this cart item");
        }
    } catch (err) {
        throw new Error(err.message);
    }
}

const removeCartItem = async(userId, cartItemId) => {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    if(user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("You cannot remove another user's item");
}

const findCartItemById = async(cartItemId) => {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if(cartItem) {
        return cartItem;
    }else {
        throw new Error(`Cart item not found with id ${cartItemId}`);
    }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };