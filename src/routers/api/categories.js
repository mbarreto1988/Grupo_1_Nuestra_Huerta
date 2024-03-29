const express = require('express');
const router = express.Router();
const categoriesAPIController = require('../../controllers/api/categoriesAPIController');

//Rutas
//Listado de todos los generos
router.get('/', categoriesAPIController.list);
//Detalle del genero
router.get('/:id', categoriesAPIController.detail);


module.exports = router;