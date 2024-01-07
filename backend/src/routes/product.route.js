const express = require('express');
const productController = require('../controllers/product.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();


router.get("/", authenticate, productController.getAllProducts);

router.get("/id/:id", authenticate, productController.findProductById);


module.exports = router;