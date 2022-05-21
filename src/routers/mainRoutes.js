const express = require ('express');

const mainController = require ('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.inicio);

router.get('/frutas-verduras', mainController.bananas);

router.get('/carrito', mainController.carrito);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/formProd', mainController.formProd);
// formulario-productos



module.exports = router;