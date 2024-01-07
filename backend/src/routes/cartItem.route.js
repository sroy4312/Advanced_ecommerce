const express = require('express');
const cartItemController = require('../controllers/cartItem.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();

router.put("/:id", authenticate, cartItemController.updateCartItem);

router.delete("/:id", authenticate, cartItemController.removeCartItem);


module.exports = router;