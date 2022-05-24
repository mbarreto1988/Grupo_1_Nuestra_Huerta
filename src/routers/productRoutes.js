const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/create', productController.formProd);
router.get('/detalleProducto', productController.bananas);
router.get('/frutasOrganicas', productController.frutasOrganicas);
router.get('/verdurasOrganicas', productController.verdurasOrganicas);
router.get('/bolsonesYPromos', productController.bolsonesYPromos);
router.get('/nuestrasRecetas', productController.nuestrasRecetas);

module.exports = router;
