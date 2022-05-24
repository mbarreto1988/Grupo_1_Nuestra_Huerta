// const path = require('path')

const controller = {
    inicio: (req, res) => {
        res.render('inicio');
    },
    
    contactanos: (req, res) => {
        res.render('contactanos');
    },
    preguntasFrecuentes: (req, res) => {
        res.render('preguntasFrecuentes');
    }
}

module.exports = controller;