const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

// Controller
const usersController = require('../controllers/userController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

// Carrito
router.get('/carrito', usersController.carrito);

module.exports = router;



// //logica para guardar las imagenes (avatar)
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/img/users');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// })

// const uploadFile = multer({ storage });
// const userController = require('../controllers/userController');

// // variable de validaciones
// const validations = [
//     body('firstname').notEmpty().withMessage('Tienes que escribir tu nombre'),
//     body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
//     body('phone').notEmpty().withMessage('Por favor escribe un teléfono'),
//     body('email')
//         // .notEmpty().withMessage('Ingrese un email').bail()
//         .isEmail().withMessage('Ingrese un correo válido'),
//     body('password').notEmpty().withMessage('Elige una constraseña'),
//     body('avatar').custom((value, { req }) => {
//         let file = req.file;
//         if (!file) {
//             throw new Error('Tienes que subir una imagen');
//         }
//         return true;
//     })
// ];


// // Vista del formulario de registro
// router.get("/register", userController.register);

// // Procesar el registro
// router.post("/register",uploadFile.single('avatar'), validations, userController.store);

// // Vista del formulario de login
// router.get('/login', userController.login);

// //procesar el login
// router.post("/login", validations, userController.createSession);



// router.get('/carrito', userController.carrito);

// module.exports = router;