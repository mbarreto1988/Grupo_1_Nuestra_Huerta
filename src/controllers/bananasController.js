const path = require('path')

const controlador = {
  
    inicio : (req, res) => {
        res.sendFile(path.resolve('src/views/bananas.html'))
    },
}

module.exports = controlador;