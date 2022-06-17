const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

//logica para guardar las imagenes (avatar)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/users');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const uploadFile = multer({ storage });
const userController = require('../controllers/userController');

// variable de validaciones
const validations = [
    body('firstname').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('phone').notEmpty().withMessage('Por favor escribe un teléfono'),
    body('email')
        // .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage('Ingrese un correo válido'),
    body('password').notEmpty().withMessage('Elige una constraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }
        return true;
    })
];


// Vista del formulario de registro
router.get("/register", userController.register);

// Procesar el registro
router.post("/register",uploadFile.single('avatar'), validations, userController.store);

// Vista del formulario de login
router.get('/login', userController.login);

//procesar el login
router.post("/login", validations, userController.createSession);



router.get('/carrito', userController.carrito);

module.exports = router;