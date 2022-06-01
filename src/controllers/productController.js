const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);


const controller = {
    formProd: (req, res) => {
        res.render('formProd');
    },
    detail: (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('productDetail', {product});
    },

//esto ya no se va a usar porque es solo una vista de Detail

        bananas: (req,res) => {
        res.render('bananas');
    },
    kiwi: (req,res) => {
        res.render('kiwi');
    },
    brocoli: (req,res) => {
        res.render('brocoli');
    },
    champignon: (req,res) => {
        res.render('champignon');
    },
    lechuga: (req,res) => {
        res.render('lechuga');
    },
    limon: (req,res) => {
        res.render('limon');
    },
    mandarina: (req,res) => {
        res.render('mandarina');
    },
    papa: (req,res) => {
        res.render('papa');
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
    }

}
    module.exports = controller;