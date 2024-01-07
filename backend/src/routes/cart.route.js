const express = require('express');
const cartController = require('../controllers/cart.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();


router.get("/", authenticate, cartController.findUserCart);

router.put("/add", authenticate, cartController.addItemToCart);


module.exports = router;