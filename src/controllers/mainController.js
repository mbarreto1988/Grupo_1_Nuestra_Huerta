const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);

const destacadosMes = products.filter(element => element.seccion == "destacados del mes");
// const masVisitados = products.filter(element => element.seccion == "combos");
const ofertas = products.filter(element => element.descuento > 15)

//busca el nombre del ejs a renderizar
const controller = {
    inicio: (req, res) => {
        console.log(products)
        res.render('inicio', {products: destacadosMes, ofertas}); // "inicio" EJS a renderizar {products} la keyword
    },
    

    contactanos: (req, res) => {
        res.render('contactanos');
    },
    preguntasFrecuentes: (req, res) => {
        res.render('preguntasFrecuentes');
    }
}

module.exports = controller;