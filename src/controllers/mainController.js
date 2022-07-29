const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Sections = db.Section;
const Products = db.Product;

const findProductsBySect = async (section) => {
    try {
        const products = await Products.findAll({
            where: {
                section_id: section.toString()
            },
        });
        return products

    } catch (error) {

    }
}
const findProductsByCat = async (category) => {
    try {
        const products = await Products.findAll({
            where: {
                category_id: category.toString()
            },
        });
        return products

    } catch (error) {

    }
}

const controller = {
    inicio: async (req, res) => {
        try {
            const nuestrasFrutas = await findProductsBySect(1)
            const destacadosMes = await findProductsBySect(2)
            const nuestrasVerduras = await findProductsBySect(3)
            const masVisitados = await findProductsBySect(4)
            const data = {
                destacadosMes,
                masVisitados,
                nuestrasFrutas,
                nuestrasVerduras
            }
            res.render('./inicio', { Products: data })

        } catch (error) {
            console.log(error);

        }
    },
    categoria: async (req, res) => {
        try {
            switch (req.params.categoria) {
                case "frutas": const frutas = await findProductsByCat(1)
                    res.render('./producto', { Products: frutas })
                    break;
                case "verduras": const verduras = await findProductsByCat(2)
                    res.render('./producto', { Products: verduras })
                    break;
                case "bolsones": const bolsones = await findProductsByCat(3)
                    res.render('./producto', { Products: bolsones })
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    },


    contactanos: (req, res) => {
        res.render('contactanos');
    },
    nuestrasRecetas: (req, res) => {
        res.render('nuestrasRecetas');
    },

}
module.exports = controller;