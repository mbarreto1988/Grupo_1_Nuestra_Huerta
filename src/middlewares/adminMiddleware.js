module.exports = (req, res, next) => {
    console.log(req.session.userLogged)
    if (req.session.userLogged.rol_id == "1") {
        next()
    } else {
        res.redirect('/')
    }
}