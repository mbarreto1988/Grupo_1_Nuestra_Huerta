const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de películas
router.get('/', productsAPIController.list);
//Detalle de una película
router.get('/detail', productsAPIController.detail);
router.get('/ranking', productsAPIController.ranking);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
// router.get('/recomended/:rating', moviesAPIController.recomended);
// //Agregar una película
// router.post('/create', moviesAPIController.create);
// //Modificar una película
// router.put('/update/:id', moviesAPIController.update);
// //Eliminar una película
// router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;