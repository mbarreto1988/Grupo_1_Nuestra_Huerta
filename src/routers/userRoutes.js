const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/carrito', userController.carrito);
router.get('/login', userController.login);
router.get('/register', userController.register);




module.exports = router;