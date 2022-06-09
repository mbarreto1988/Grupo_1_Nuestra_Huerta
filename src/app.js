const express = require('express');

const app = express(); // se requiere la libreria nativa express

const path = require ('path'); //se requiere la libreria nativa path

const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE 

const mainRouter = require ('./routers/mainRoutes'); //se requiere las rutas con las carpetas
const productRouter = require ('./routers/productRoutes');
const userRouter = require ('./routers/userRoutes');
const formProdRouter = require("./routers/productRoutes");
const adminRouter = require ('./routers/adminRoutes');


app.set('view engine', "ejs"); //aca se configura el ejs para hacer la extension en los html

app.set('views', path.resolve(__dirname, '../src/views')); //para acceder a la carpeta views

app.use(express.static('public')); //aca se hace que la carpeta public sea publica

app.use(express.urlencoded({ extended: false })); //agregado por JPS para usar Metodos
app.use(express.json()); //agregado por JPS para usar Metodos
app.use(methodOverride('_method')); //agregado por JPS para usar Metodos

app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// ************ catch 404 and forward to error handler ************
//app.use((req, res, next) => { res.status(404).render('not-found'); })

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 👌');}) //aca se crea la direccion del localHost

// const inicioRouter = require("./routers/inicio");
// const carritoRouter = require("./routers/carrito");
// const loginRouter = require("./routers/login");
// const registerRouter = require("./routers/register");
// const bananasRouter = require("./routers/bananas");
// const formProdRouter = require("./routers/formProd");

// const app = express();

// app.use(express.static('public'));

// app.set('view engine', "ejs"); //aca se configura el ejs para hacer la extension en los html

// app.use("/",inicioRouter);
// app.use("/carrito",carritoRouter);
// app.use("/login",loginRouter);
// app.use("/register",registerRouter);
// app.use("/bananas",bananasRouter);
// app.use("/formProd",formProdRouter);

// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log('Servidor iniciado en el puerto: ' + port);
//     });



// app.listen(3000, ()=>{
//     console.log('Servidor funcionando');
// });

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/inicio.html');
// });

// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/login.html');
// });

// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + '/views/register.html');
// });


// app.get('/producto', (req,res)=>{
//     res.sendFile(__dirname + '/views/producto.html');
// });

// app.get('/bolsones', (req,res)=>{
//     res.sendFile(__dirname + '/views/bolsones.html');
// });

// app.get('/frutas', (req,res)=>{
//     res.sendFile(__dirname + '/views/frutas.html');
// });

// app.get('/verduras', (req,res)=>{
//     res.sendFile(__dirname + '/views/verduras.html');
// });

// app.get('/bananas', (req,res)=>{
//     res.sendFile(__dirname + '/views/bananas.html');
// });

// app.get('/mandarina', (req,res)=>{
//     res.sendFile(__dirname + '/views/mandarina.html');
// });

// app.get('/kiwi', (req,res)=>{
//     res.sendFile(__dirname + '/views/kiwi.html');
// });

// app.get('/limon', (req,res)=>{
//     res.sendFile(__dirname + '/views/limon.html');
// });


// app.get('/brocoli', (req,res)=>{
//     res.sendFile(__dirname + '/views/brocoli.html');
// });


// app.get('/champignon', (req,res)=>{
//     res.sendFile(__dirname + '/views/champignon.html');
// });


// app.get('/lechuga', (req,res)=>{
//     res.sendFile(__dirname + '/views/lechuga.html');
// });



// app.get('/papa', (req,res)=>{
//     res.sendFile(__dirname + '/views/papa.html');
// });

// app.get('/carrito', (req,res)=>{
//     res.sendFile(__dirname + '/views/carrito.html');
// });

// // npm start