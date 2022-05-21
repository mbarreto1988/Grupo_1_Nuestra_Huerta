// const path = require('path')

const controller = {
    inicio: (req, res) => {
        res.render('inicio');
    },
    bananas: (req,res) => {
        res.render('bananas');
    },
    carrito: (req, res) => {
        res.render('carrito');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    formProd: (req, res) => {
        res.render('formProd');
    }
}

module.exports = controller;