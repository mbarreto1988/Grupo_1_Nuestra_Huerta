const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('name').notEmpty().withMessage('Ingrese el nombre del producto').isLength(5).withMessage('Minimo de 5 caracteres'),
	check('price').notEmpty().withMessage('Ingrese un precio'),
	check('description').notEmpty().withMessage('Ingrese la descripción del producto').isLength(20).withMessage('Minimo de 20 caracteres'),
	check('stock').notEmpty().withMessage('Ingrese el stock del producto'),
	check('discount').notEmpty().withMessage('Ingrese el descuento del producto'),
	]

