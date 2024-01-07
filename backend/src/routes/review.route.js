const express = require('express');
const reviewController = require('../controllers/review.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();

router.post("/create", authenticate, reviewController.createReview);

router.get("/product/:productId", authenticate, reviewController.getAllReview);


module.exports = router;