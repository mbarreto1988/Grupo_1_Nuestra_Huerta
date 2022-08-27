const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
const Roles = db.Role;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        // db.User.findByPk(req.params.id)
        db.User.findAll({
            count: [[ 'id' ]],
            })
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/detail'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    // 'actorMovies': (req, res) => {
    //     db.Actor.findByPk(req.params.id,{
    //         include: ['movies']
    //     })
    //         .then(actor => {
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     total: actor.length,
    //                     url: '/api/actor/:id'
    //                 },
    //                 data: actor
    //             }
    //             res.json(respuesta);
    //         });
    // },
    // create: (req,res) => {
    //     Actors
    //     .create(
    //         {
    //             first_name: req.body.first_name,
    //             last_name: req.body.last_name,
    //             rating: req.body.rating,
    //             favorite_movie_id: req.body.favorite_movie_id
    //         }
    //     )
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/create'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/create'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // },
    // update: (req,res) => {
    //     let actorId = req.params.id;
    //     Actors.update(
    //         {
    //             first_name: req.body.first_name,
    //             last_name: req.body.last_name,
    //             rating: req.body.rating,
    //             favorite_movie_id: req.body.favorite_movie_id,
    //         },
    //         {
    //             where: {id: actorId}
    //     })
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/update/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 204,
    //                     total: confirm.length,
    //                     url: 'api/actors/update/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // },
    // destroy: (req,res) => {
    //     let actorId = req.params.id;
    //     Actors
    //     .destroy({where: {id: actorId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/delete/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 204,
    //                     total: confirm.length,
    //                     url: 'api/actors/delete/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // }
    
}

module.exports = usersAPIController;