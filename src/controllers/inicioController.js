const path = require('path')

const controlador = {
    // about : (req, res) => {
    //     res.sendFile(path.resolve('src/views/about.html'))
    // },
    inicio : (req, res) => {
        res.sendFile(path.resolve('src/views/inicio.html'))
    },
}

module.exports = controlador;