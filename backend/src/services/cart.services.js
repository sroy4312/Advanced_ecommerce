const Cart = require('../models/cart.model.js');
const CartItem = require('../models/cartitem.model.js');
const Product = require('../models/product.model.js');

const createCart = async(user) => {
    try {
        const cart = new Cart({user});
        const createdCart = await cart.save();
        return createdCart;
    } catch (err) {
        throw new Error(err.message);
    }
}

const findUserCart = async(userId) => {
    try {
        let cart = await Cart.findOne({user: user});
        let cartItems = await CartItem.find({cart: cart._id}).populate("product");
        cart.cartItems = cartItems;
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;
        for(let cartitem of cart.cartItems) {
            totalPrice += cartitem.price;
            totalDiscountedPrice += cartitem.discountedPrice;
            totalItem += cartitem.quantity;
        }
        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discounts = totalPrice - totalDiscountedPrice;
        return cart;
    } catch (err) {
        throw new Error(err.message);
    }
}

const addCartItem = async(userId, req) => {
    try {
        const cart = await Cart.findOne({user: userId});
        const product = await Product.findById(req.productId);
        const isPresent = await CartItem.findOne({cart: cart._id, product: product._id, userId});
        if(!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice
            })
            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return "Item added to cart";
        }
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { createCart, findUserCart, addCartItem };