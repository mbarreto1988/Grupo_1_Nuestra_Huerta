const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Categories = db.Category;
const Sections = db.Section;
const Products = db.Product;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const categoriesAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
        .then(categories => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: categories.length,
                    url: 'api/categories'
                },
                data: categories
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Category.findByPk(req.params.id)
            .then(category => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: category.length,
                        url: '/api/category/:id'
                    },
                    data: category
                }
                res.json(respuesta);
            });
    },
    // 'genreMovies': (req, res) => {
    //     db.Genre.findByPk(req.params.id,{
    //         include: ['movies']
    //     })
    //         .then(genre => {
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     total: genre.length,
    //                     url: '/api/genre/:id/movies'
    //                 },
    //                 data: genre
    //             }
    //             res.json(respuesta);
    //         });
    // }
}

module.exports = categoriesAPIController;