const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/:id/detail', productController.detail);

module.exports = router;
