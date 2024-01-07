const express = require('express');
const orderController = require('../controllers/adminOrder.controller.js');
const authenticate = require('../middleware/authenticate.js');

const router = express.Router();


router.get("/", authenticate, orderController.getAllOrders);

router.put("/:orderId/confirmed", authenticate, orderController.confirmOrder);

router.put("/:orderId/ship", authenticate, orderController.shipOrder);

router.put("/:orderId/deliver", authenticate, orderController.deliverOrder);

router.put("/:orderId/cancel", authenticate, orderController.cancellledOrder);

router.put("/:orderId/delete", authenticate, orderController.deleteOrder);


module.exports = router;