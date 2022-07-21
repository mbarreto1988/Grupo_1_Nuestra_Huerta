const express = require('express');
const path = require ('path'); //se requiere la libreria nativa path
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE 
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const app = express(); // se requiere la libreria nativa express

app.use(express.static('public')); //aca se hace que la carpeta public sea publica

app.use(express.urlencoded({ extended: false })); //agregado por JPS para usar Metodos
app.use(express.json()); //agregado por JPS para usar Metodos
app.use(methodOverride('_method')); //agregado por JPS para usar Metodos

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));//paso session como middleware

app.use(cookies()); //me permite trabajar en res y en req con un objeto literal

app.use(userLoggedMiddleware);

app.set('view engine', "ejs"); //aca se configura el ejs para hacer la extension en los html
app.set('views', path.resolve(__dirname, '../src/views')); //para acceder a la carpeta views

const mainRouter = require ('./routers/mainRoutes'); //se requiere las rutas con las carpetas
const productRouter = require ('./routers/productRoutes');
const userRouter = require ('./routers/userRoutes');
// const formProdRouter = require('./routers/productRoutes');
const adminRouter = require ('./routers/adminRoutes');


app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => { res.status(404).render('not-found'); })

app.listen(3001, () => { console.log('Servidor arriba en el puerto 3001 👌');}) //aca se crea la direccion del localHost
