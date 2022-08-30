const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('name').notEmpty().withMessage('Ingrese el nombre del producto').isLength(5).withMessage('Minimo de 5 caracteres'),
	check('price').notEmpty().withMessage('Ingrese un precio'),
	check('description').notEmpty().withMessage('Ingrese la descripción del producto').isLength(20).withMessage('Minimo de 20 caracteres'),
	check('stock').notEmpty().withMessage('Ingrese el stock del producto'),
	check('discount').notEmpty().withMessage('Ingrese el descuento del producto'),
	check('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
]

