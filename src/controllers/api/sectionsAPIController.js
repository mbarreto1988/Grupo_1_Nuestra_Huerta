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
const sectionsAPIController = {
    'list': (req, res) => {
        db.Section.findAll()
        .then(sections => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: sections.length,
                    url: 'api/sections'
                },
                data: sections
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Section.findByPk(req.params.id)
            .then(section => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: section.length,
                        url: '/api/section/:id'
                    },
                    data: section
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

module.exports = sectionsAPIController;