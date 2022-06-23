function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/user/profile');
	}
	next();
}

module.exports = guestMiddleware;

//este middleware recibe tres parametros. Lo que busco es ver si tengo alguna sesion abierta 
// y mi sistema lo mande al loggin (a su profile). Si no está en sesion, next!
//esto lo requiero en userRoutes
