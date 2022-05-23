const express = require ('express');
const mainController = require ('../controllers/mainController');
const router = express.Router();
router.get('/', mainController.inicio);
router.get('/frutas-verduras', mainController.bananas);
router.get('/carrito', mainController.carrito);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/formulario-productos', mainController.formProd);
router.get('/frutasOrganicas', mainController.frutasOrganicas);
router.get('/verdurasOrganicas', mainController.verdurasOrganicas);
router.get('/bolsonesYPromos', mainController.bolsonesYPromos);
router.get('/nuestrasRecetas', mainController.nuestrasRecetas);
router.get('/contactanos', mainController.contactanos);
router.get('/preguntasFrecuentes', mainController.preguntasFrecuentes);


module.exports = router;