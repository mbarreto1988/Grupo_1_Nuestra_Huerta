const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Sections = db.Section;
const Products = db.Product;

module.exports = {
    index: (req, res) => {
        try {
            Products.findAll(
                {
                    include: { association: "sections" }
                })
                .then(productos => {
                    res.render('./admin/administrar', { productos })
                })
        } catch (error) {
            console.log(error);
        }
    },

    create: (req, res) => {

        let promCategories = Categories.findAll();
        let promSections = Sections.findAll();

        Promise
            .all([promCategories, promSections])
            .then(([allCategories, allSections]) => {
                return res.render('admin/create',
                    { allCategories, allSections })
            })
            .catch(error => res.send(error))
    },

    store: function (req, res) {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            let promCategories = Categories.findAll();
            let promSections = Sections.findAll();
            Promise
                .all([promCategories, promSections])
                .then(([allCategories, allSections]) => {
                    res.render('./admin/create', {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        allCategories,
                        allSections,

                    })
                })
        } else {
            let image = "default-image.png"
            if (req.file) {
                image = req.file.filename;
            };
            Products
                .create(
                    {
                        category_id: req.body.category_id,
                        name: req.body.name,
                        price: req.body.price,
                        stock: req.body.stock,
                        discount: req.body.discount,
                        section_id: req.body.section_id,
                        image,
                        description: req.body.description,
                    }
                )
                .then(() => {
                    return res.redirect('/admin/administrar')
                })
                .catch(error => res.send(error))
        }
    },
        show: (req, res) => {
            db.Product.findByPk(req.params.id,
                {
                    include: { association: "sections" }

                })
                .then(miProducto => {
                    res.render('./admin/detail', { miProducto });
                });
        },
            edit: function (req, res) {
                let productoEditar = req.params.id;
                let promProducts = Products.findByPk(productoEditar, { include: ['categories', 'sections'] });
                let promCategories = Categories.findAll();
                let promSections = Sections.findAll();
                Promise
                    .all([promProducts, promCategories, promSections])
                    .then(([Product, allCategories, allSections]) => {
                        return res.render(path.resolve(__dirname, '..', 'views', 'admin/edit'), { Product, allCategories, allSections })
                    })
                    .catch(error => res.send(error))
            },
        update: function (req, res) {
            let productoEditar = req.params.id;
            const resultValidation = validationResult(req);
            if (!resultValidation.isEmpty()) {
                let promProducts = Products.findByPk(productoEditar, { include: ['sections', 'categories'] });
                let promCategories = Categories.findAll();
                let promSections = Sections.findAll();
                Promise
                    .all([promCategories, promSections])
                    .then(([Product, allCategories, allSections]) => {
                        res.render('./admin/edit', {
                            Product,
                            errors: resultValidation.mapped(),
                            allCategories,
                            allSections,
                        })
                    })
            } else {
                let image = req.body.image = req.file ? req.file.filename : req.body.oldImagen;
                
                Products
                    .update(
                        {
                            name: req.body.name,
                            price: req.body.price,
                            description: req.body.description,
                            discount: req.body.discount,
                            stock: req.body.stock,
                            section_id: req.body.section_id,
                            category_id: req.body.category_id,
                            image
                        },
                        {
                            where: { id: productoEditar }
                        })
                    .then(() => {
                        return res.redirect('/admin/administrar')
                    })
                    .catch(error => res.send(error))
            }
        },
            destroy: function (req, res) {
                let productId = req.params.id;
                Products
                    .destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
                    .then(() => {
                        return res.redirect('/admin/administrar')
                    })
                    .catch(error => res.send(error))
            }
      
    }