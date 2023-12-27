const express = require('express');
const { getUserController, GetAllUsers } = require('../controllers/user.controller.js');

const router = express.Router();

router.get('/profile', getUserController);

router.get('/', GetAllUsers);

module.exports = router;