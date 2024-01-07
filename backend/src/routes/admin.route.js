const express = require('express');
const orderController = require('../controllers/adminOrder.controller.js');
const authenticate = require('../middleware/authenticate.js');

const router = express.Router();


router.get("/", authenticate, orderController.getAllOrders);

router.put("/:orderId/confirmed", authenticate, orderController.confirmOrder);


module.exports = router;