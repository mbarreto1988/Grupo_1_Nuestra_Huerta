const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
// const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

// const products = JSON.parse(fileProducts);

const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Sections = db.Section;
const Products = db.Product;

const controller = {

   detail: (req, res) => {
        try {
            Products.findByPk(req.params.id,
                {
                    include: { association: "categories" }
                })
                .then(product => {
                    res.render('../views/productDetail', { product })
                })
        } catch (error) {
            console.log(error);
        }
    },
}

    module.exports = controller;