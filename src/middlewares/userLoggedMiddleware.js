const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;//del req, quiero las cookies y quiero lo que vino por userEmail
	let userFromCookie = User.findByField('email', emailInCookie); // con esto busco el usuario desde el modelo por la variable USER

	//cookies: todo lo que se guarda del lado del clientes (navegador)

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged; //me muestra el HI Fullname
		//res.locals son vairables que puedo compartir en todas las vistas
		// en el navbar.ejs ponemos un if que si tenemos el locals.islogged como true, muestra el navbar. Al setearlo en falso, no lo muestra
	
	}

	next();
}

module.exports = userLoggedMiddleware;

//este midd lo que hace es que si estoy en una sesion, no me muestre la posibilidad de login o register
// es un midd de aplicacion (esta en app.use)