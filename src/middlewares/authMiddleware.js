function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/user/login');
	}
	next();
}

module.exports = authMiddleware;

// este Midd busca que si no tengo a nadie en sesion, entonces lo redirijo al login
// si tengo a alguien, que pase al proximo midd
// este es un midd de ruta, no global (ver el router.get profile)