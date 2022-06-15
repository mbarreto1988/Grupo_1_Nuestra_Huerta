const express = require ('express');
const mainController = require ('../controllers/mainController');
const router = express.Router();
router.get('/', mainController.inicio);

router.get('/contactanos', mainController.contactanos);
router.get('/', mainController.producto);
router.get('/:categoria', mainController.categoria);
router.get('/nuestrasRecetas', mainController.nuestrasRecetas);

module.exports = router;