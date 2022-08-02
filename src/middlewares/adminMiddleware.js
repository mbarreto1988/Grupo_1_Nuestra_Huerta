module.exports = (req, res, next) => {
    if (req.session.userLogged.rol_id == "1") {
        next()
    } else {
        res.redirect('/')
    }
}