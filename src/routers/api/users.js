const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los actores
router.get('/', usersAPIController.list);
//Detalle del actor
router.get('/detail', usersAPIController.detail);
//En que peliculas trabajo el actor con id tal
// router.get('/:id/movies', actorsAPIController.actorMovies);

// //Agregar un actor
// router.post('/create', actorsAPIController.create);
// //Modificar un actor
// router.put('/update/:id', actorsAPIController.update);
// //Eliminar un actor
// router.delete('/delete/:id', actorsAPIController.destroy);

module.exports = router;