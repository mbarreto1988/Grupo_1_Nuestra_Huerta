const path = require('path')
const { validationResult } = require('express-validator');
const fs = require("fs")
// const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
const fileUsers = fs.readFileSync(path.resolve("src/data/usuarios.json"), "utf-8")
const users = JSON.parse(fileUsers)
const User = require("../models/User.js");

const controller = {
    register: (req, res) => {
        return res.render('../views/users/userRegisterForm');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('../views/users/userRegisterForm', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);
        //con esto lo que hago es buscar un usuario por el campo email, para ver si ya está registrado o no
        // si el usuario esta en la DB, retorna el error porque ya está registrado
        if (userInDB) {
            return res.render('../views/users/userRegisterForm', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body //es importante mandar el oldData para que me mantenga la info que ya previamente registré
            });
        }

        let userToCreate = {
            //ademas le pido que me traiga todo lo que viene del body, y que del avatar me traiga puntualmente el filename
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10), //busca encriptar la contraseña usando del modulo bccy el metodo hashSync
            email:req.body.email.toLowerCase(),
            //lo que pongo, está pisando la propiedad password del objeto literal
            avatar: req.file.filename,
            rol: 1
        }
        //si pasa todas las validaciones, me crea el usuario
        let userCreated = User.create(userToCreate);

        return res.redirect('/user/login');
    },
    login: (req, res) => {
        return res.render('../views/users/userLoginForm');
    },

    //este metodo busca procesar el form de login
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email.toLowerCase());
        //lo que voy a hacer es ver si la persona está logueada o no tomando el metodo findByField con el objeto email

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);//comparo deshasheando la contraseña
            if (isOkThePassword) {
                delete userToLogin.password;//borra el passw por seguridad, mientras se siga con la sesion activa
                req.session.userLogged = userToLogin;//con esto busco guardar la sesion de la persona con la propiedad userLogged

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 }) //max 1 hora
                }//opcion de recordar usuario. Aca pregunto si en el request vino el user
                //en el response lo que hace es que si vino en el req, la cookie va a guardarse 

                // return res.send("estas logueado");//si las credenciales estan ok, me deriva al perfil del usuario
                return res.redirect('/user/profile')
                //VER ESTOOOOO!!!!!!
            }
            return res.render('../views/users/userLoginForm', {
                //aca empieza session (debo installar el modulo express session)
                errors: {
                    email: {//si la contraseña no existe
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('../views/users/userLoginForm', {
            errors: {
                email: {//si no se encontró la info cargada, le muestro por vista el mens de error
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    },
    profile: (req, res) => {
        return res.render('../views/users/userProfile', {
            user: req.session.userLogged //solo le paso la variable user, el req userLogged para que lo muestre la vista profile
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    //me elimina la sesion cuando hago logout, independientemente de que la cookie dura una hora
    carrito: (req, res) => {
        res.render('../views/users/carrito');
    },

}

module.exports = controller;




// const controller = {
//     register: (req, res) => {
//         res.render('./users/register');
//     },
//     store: (req, res) => {
//         const resultValidation = validationResult(req);
//         if (resultValidation.errors.length > 0) {
//             res.render('./users/register', {
//                 errors: resultValidation.mapped(),
//                 oldData: req.body
//             })
//             User.create(req.body);
//             res.send(resultValidation);

//         } else {
//             let avatar = req.file.filename;
//             const newUser = {
//                 id: users[users.length - 1].id + 1, //-1 para traer el tamaño del array -1 para traer la cantidad real de elemnetos, no de indices//
//                 ...req.body,
//                 password: bcrypt.hashSync(req.body.password, 10),
//                 category: 'usuario',
//                 avatar
//             };
//             users.push(newUser); //agrego el nuevo elemento al array//
//             fs.writeFileSync(path.resolve("src/data/usuarios.json"), JSON.stringify(users, null, " "));
//             res.redirect('/user/login');
//         }

//     },
//     carrito: (req, res) => {
//         res.render('./users/carrito');
//     },


//     login: (req, res) => {
//         res.render('./users/login');
//     },

//     createSession: (req, res) => {
//         const resultValidation = validationResult(req);
//         if (resultValidation.errors.length > 0) {
//             res.render('./users/login', {
//                 errors: resultValidation.mapped(),
//                 oldData: req.body
//             })
//             res.send(resultValidation);

//         }


//     },

// }




// module.exports = controller;

