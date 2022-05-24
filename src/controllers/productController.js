const controller = {
    formProd: (req, res) => {
        res.render('formProd');
    },
    bananas: (req,res) => {
        res.render('bananas');
    },
    frutasOrganicas: (req, res) => {
        res.render('frutasOrganicas');
    },
    verdurasOrganicas: (req, res) => {
        res.render('verdurasOrganicas');
    },
    bolsonesYPromos: (req, res) => {
        res.render('bolsonesYPromos');
    },
    nuestrasRecetas: (req, res) => {
        res.render('nuestrasRecetas');
    }
}

module.exports = controller;