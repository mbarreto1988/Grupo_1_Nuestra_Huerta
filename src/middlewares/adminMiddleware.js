module.exports = (req, res, next) => {
    if (req.session.userLogged.category == "admin") {
        next()
    } else {
        res.redirect('/')
    }
}