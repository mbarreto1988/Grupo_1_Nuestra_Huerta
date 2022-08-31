const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get("/searchProducts", productController.search)
router.get('/:id/detail', productController.detail);


module.exports = router;

