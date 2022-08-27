const express = require('express');
const router = express.Router();
const sectionsAPIController = require('../../controllers/api/sectionsAPIController');

//Rutas
//Listado de todos los generos
router.get('/', sectionsAPIController.list);
//Detalle del genero
router.get('/:id', sectionsAPIController.detail);


module.exports = router;