const express = require ('express');
const mainController = require ('../controllers/mainController');
const router = express.Router();
router.get('/', mainController.inicio);

router.get('/contactanos', mainController.contactanos);
router.get('/preguntasFrecuentes', mainController.preguntasFrecuentes);


module.exports = router;