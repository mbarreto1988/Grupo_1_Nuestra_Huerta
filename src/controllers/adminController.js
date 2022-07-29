const path = require('path');
const fs = require('fs');
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo
const products = JSON.parse(fileProducts);

const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Sections = db.Section;
const Products = db.Product;




module.exports = {
    index: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/administrar'), {productos});
    },
    create: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'));
       
    },

    // Create - Form to create
	create: (req, res) => {
		const product = products.find (element => element.id == req.params.id)
		res.render("../views/admin/create", {product})
	},

// Create -  Method to store
    store: (req, res) => {
    console.log(req.body)
    let imagen = "default-image.png"
    if(req.file){
        imagen = req.file.filename; //el filename viene de product.js del callback de la linea 11//
    }
    //armar el objeto que va a la base de datos//
    const newProduct = {
        id: products[products.length-1].id + 1, //-1 para traer el tamaño del array -1 para traer la cantidad real de elemnetos, no de indices//
        ...req.body,
        precio: parseInt(req.body.precio), //como price y discount son nuemeros, no puedo hacer el desestructordor ..., entonces tenog que hacerlo asi. Por otro lado, parseInt me lleva un numero a entero// 
        descuento: parseInt(req.body.descuento),
        imagen //la variable se llama igual que la key del id//
    };
    products.push(newProduct); //agrego el nuevo elemento al array//
    fs.writeFileSync(path.resolve("src/data/productos.json"), JSON.stringify(products, null, " "));
    res.redirect("/product/" + newProduct.id + "/Detail"); //me redirige como pide el ejercicio, a la ruta /products//
    },
    save: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let ultimoProducto = productos.pop();
        productos.push(ultimoProducto);
        console.log();
        let nuevoProducto = {
            id: ultimoProducto.id +1,
            nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        productos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'), nuevoProductoGuardar);
        res.redirect('/admin/administrar');
    },
    show: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let miProducto;
        productos.forEach(producto => {
            if(producto.id == req.params.id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail'), {miProducto})

    },
    edit: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        const productoId = req.params.id;
        let productoEditar = productos.find(producto=> producto.id == productoId);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {productoEditar});
    },
    update: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let productosUpdate = productos.map(producto =>{
            if(producto.id == req.body.id){
                return producto = req.body;
            }
            return producto;
        })
        let productoActualizar = JSON.stringify(productosUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'), productoActualizar)
        res.redirect('/admin/administrar');
    },
    destroy: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        const productoDeleteId = req.params.id;
        const productosFinal = productos.filter(producto => producto.id != productoDeleteId);
        let productosGuardar = JSON.stringify(productosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosGuardar);
        res.redirect('/admin/administrar');
    }
}


