const express = require('express');
const ratingController = require('../controllers/rating.controller.js');
const authenticate = require('../middleware/authenticate.js');


const router = express.Router();

router.post("/create", authenticate, ratingController.createRating);

router.put("/product/:productId", authenticate, ratingController.getAllRatings);


module.exports = router;