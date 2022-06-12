const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);

const controller = {
    // formProd: (req, res) => {
    //     res.render('formProd');
    // },
    detail: (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('productDetail', {product});
    },

    }
    module.exports = controller;