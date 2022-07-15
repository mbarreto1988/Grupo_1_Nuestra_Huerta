const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);

const destacadosMes = products.filter(element => element.seccion == "destacados del mes");
const masVisitados = products.filter(element => element.seccion == "mas visitados");
const nuestrasFrutas = products.filter(element => element.seccion == "nuestras frutas");
const nuestrasVerduras = products.filter(element => element.seccion == "nuestras verduras")

const frutas = products.filter(element => element.categoria == "frutas")
const verduras = products.filter(element => element.categoria == "verduras")
const bolsones = products.filter(element => element.categoria == "bolsones")
//busca el nombre del ejs a renderizar
const controller = {
    inicio: (req, res) => {
        // console.log(products)
        res.render('inicio', {destacadosMes, masVisitados, nuestrasFrutas, nuestrasVerduras}); // "inicio" EJS a renderizar {products} la keyword
    }, 
    
    producto: (req, res) => {
        res.render('producto', {frutas, verduras, bolsones});
    },
    categoria: (req, res) => {
        let productos = products.filter(element => element.categoria == req.params.categoria)
        res.render('producto', {productos})
    },
    
    contactanos: (req, res) => {
        res.render('contactanos');
    },
    nuestrasRecetas: (req, res) => {
        res.render('nuestrasRecetas');
    },
        
}
module.exports = controller;