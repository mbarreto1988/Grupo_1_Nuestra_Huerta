const controller = {
    formProd: (req, res) => {
        res.render('formProd');
    },
    bananas: (req,res) => {
        res.render('bananas');
    },
    kiwi: (req,res) => {
        res.render('kiwi');
    },
    brocoli: (req,res) => {
        res.render('brocoli');
    },
    champignon: (req,res) => {
        res.render('champignon');
    },
    lechuga: (req,res) => {
        res.render('lechuga');
    },
    limon: (req,res) => {
        res.render('limon');
    },
    mandarina: (req,res) => {
        res.render('mandarina');
    },
    papa: (req,res) => {
        res.render('papa');
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