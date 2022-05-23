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
    },
    frutasOrganicas: (req, res) => {
        res.render('frutasOrganicas');
    },
    verdurasOrganicas: (req, res) => {
        res.render('verdurasOrganicas');
    },
    bolsonesYPromos: (req, res) => {
        res.render('bolsonesYPromos');
    },
    nuestrasRecetas: (req, res) => {
        res.render('nuestrasRecetas');
    },
    contactanos: (req, res) => {
        res.render('contactanos');
    },
    preguntasFrecuentes: (req, res) => {
        res.render('preguntasFrecuentes');
    }
}

module.exports = controller;