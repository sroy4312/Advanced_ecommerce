const productService = require('../services/product.services.js');

const createProduct = async(req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const deleteProduct = async(req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productService.deleteProduct(productId);
        return res.status(201).send(deletedProduct);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const updateProduct = async(req, res) => {
    const productId = req.params.id;
    try {
        const updatedProduct = await productService.deleteProduct(productId, req.body);
        return res.status(201).send(updatedProduct);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const findProductById = async(req, res) => {
    const productId = req.params.id;
    try {
        const findProduct = await productService.findProductById(productId);
        return res.status(201).send(findProduct);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const getAllProducts = async(req, res) => {
    //const productId = req.params.id;
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const createMultipleProducts = async(req, res) => {
    //const productId = req.params.id;
    try {
        await productService.createMultipleProduct(req.body);
        return res.status(201).send({message: "Products created successfully.", success: true});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleProducts };