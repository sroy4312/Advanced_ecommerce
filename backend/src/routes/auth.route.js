const express = require('express');
const authController = require('../controllers/auth.controller.js');

const router = express.Router();


router.post("/signup", authController.register);

router.post("/signin", authController.login);

module.exports = router;