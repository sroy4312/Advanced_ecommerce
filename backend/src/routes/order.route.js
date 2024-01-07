const express = require('express');
const orderController = require('../controllers/order.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();

router.post("/", authenticate, orderController.createOrder);

router.get("/user", authenticate, orderController.orderHistory);

router.get("/:id", authenticate, orderController.findOrderById);


module.exports = router;