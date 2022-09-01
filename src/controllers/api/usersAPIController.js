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
// const usersAPIController = {
//     'list': (req, res) => {
//         db.User.findAll()
//         .then(users => {
//             let respuesta = {
//                 meta: {
//                     status : 200,
//                     total: users.length,
//                     url: 'api/users'
//                 },
//                 data: users
//             }
//                 res.json(respuesta);
//             })
//     },
    
//     'detail': (req, res) => {
//         // db.User.findByPk(req.params.id)
//         db.User.findAll({
//             count: [[ 'id' ]],
//             })
//             .then(user => {
//                 let respuesta = {
//                     meta: {
//                         status: 200,
//                         total: user.length,
//                         url: '/api/users/detail'
//                     },
//                     data: user
//                 }
//                 res.json(respuesta);
//             });
//     },
// }


// module.exports = usersAPIController;


const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll({attributes:{exclude: ["password"]}})
        .then(users => {
            const usersData = users.map(user => (
                 {
                    ...user.dataValues,
                    detail: '/api/users/' + user.id
                }
            ))
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: usersData
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id, {attributes:{exclude: ["password"]}})
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/' + user.id
                    },
                    data: user,
                }
                res.json(respuesta);
            });
    },
}
module.exports = usersAPIController;