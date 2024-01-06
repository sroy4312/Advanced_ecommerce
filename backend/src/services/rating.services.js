const Rating = require('../models/rating.model.js');
const productService = require('./product.services.js');

const createRating = async(user, req) => {
    const product = await productService.findProductById(req.productId);
    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: req.rating,
        createdAt: new Date()
    })
    return await rating.save();
}

const getProductRating = async(productId) => {
    return await Rating.find({product: productId});
}

module.exports = { createRating, getProductRating };