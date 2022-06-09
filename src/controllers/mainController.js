const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);

const destacadosMes = products.filter(element => element.seccion == "destacados del mes");
const masVisitados = products.filter(element => element.seccion == "mas visitados");
const nuestrasFrutas = products.filter(element => element.seccion == "nuestras frutas");
const nuestrasVerduras = products.filter(element => element.seccion == "nuestras verduras")

//busca el nombre del ejs a renderizar
const controller = {
    inicio: (req, res) => {
        console.log(products)
        res.render('inicio', {destacadosMes, masVisitados, nuestrasFrutas, nuestrasVerduras}); // "inicio" EJS a renderizar {products} la keyword
    },
    contactanos: (req, res) => {
        res.render('contactanos');
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
    preguntasFrecuentes: (req, res) => {
        res.render('preguntasFrecuentes');
    }
}

module.exports = controller;