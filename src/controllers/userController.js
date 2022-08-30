const path = require('path')
const { validationResult } = require('express-validator');
const fs = require("fs")
const bcrypt = require('bcrypt');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { update } = require('./adminController');

const Users = db.User;
const Roles = db.Role;


const controlador = {
    register: (req, res) => {
        res.render('./users/userRegisterForm')
    },
    processRegister: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (!resultValidation.isEmpty()) {
                res.render('./users/userRegisterForm', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            }
            const newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename,
                rol_id: 2,
            };
            const user = await Users.create(newUser)

            res.redirect('/user/login')

        } catch (error) {
            console.log(error)
        }

    },
    login: (req, res) => {
        res.render('./users/userLoginForm')
    },
    loginProcess: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (!resultValidation.isEmpty()) {
                res.render('./users/userLoginForm', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            }

            let userToLogin = await Users.findOne({ where: { email: req.body.email } });

            if (userToLogin) {

                let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                
                if (isOkThePassword) {

                    if (userToLogin.rol_id == 1) {
                        delete userToLogin.password;
                        req.session.adminLogged = userToLogin;
                        res.locals.adminLogged = true;
                    }

                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                    }
    
                    res.redirect('/user/profile');                    
                } else {
                    res.render('./users/userRegisterForm', {
                        errors: {
                            email: {
                                msg: 'Las credenciales son inválidas'
                            }
                        }
                    })
                }
            }
        } catch (error) {

            console.log(error)
        }
    },
    profile: (req, res) => {
        res.render('./users/userProfile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },

    edit: function (req, res) {
        db.User.findByPk(req.params.id,
            {
                include: { association: "role" }

            })
            .then(User => {
                res.render('./users/userProfile', { User });
            });
    },
    update: function (req, res) {
        let image = req.body.image = req.file ? req.file.filename : req.body.oldImagen;
        let UserId = req.params.id;
        Users
            .update(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    image,
                },
                {
                    where: { id: UserId }
                })
            .then(() => {
                return res.redirect('/user/profile')
            })
            .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        Users
            .destroy({ where: { id: userId } }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/')
            })
            .catch(error => res.send(error))
    },
    carrito: (req, res) => {
        res.render('./users/carrito');
    }
}

module.exports = controlador;