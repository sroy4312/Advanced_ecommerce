const express = require('express');
const productController = require('../controllers/product.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();

router.post("/", authenticate, productController.createProduct);

router.post("/creates", authenticate, productController.createMultipleProducts);

router.delete("/:id", authenticate, productController.deleteProduct);

router.put("/:id", authenticate, productController.updateProduct);


module.exports = router;