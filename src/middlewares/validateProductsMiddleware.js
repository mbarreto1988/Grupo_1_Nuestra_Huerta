const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('price').notEmpty().withMessage('Tienes que escribir un precio'),
	check('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
	check('section_id').notEmpty().withMessage('Tienes que escribir una seccion'),
	check('category_id').notEmpty().withMessage('Tienes que escribir una categoria'),
	// check('country').notEmpty().withMessage('Tienes que elegir un país'),
	check('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif'];

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