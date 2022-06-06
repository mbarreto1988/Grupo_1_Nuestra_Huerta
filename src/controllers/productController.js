const path = require('path')
const fs = require("fs"); //libreria que sirve para leer o escribir archivos
const fileProducts = fs.readFileSync(path.resolve("src/data/productos.json"), "utf-8") //me lee los archivos de la variable anterior. Recibe como parametro la ruta del archivo

const products = JSON.parse(fileProducts);

const controller = {
    formProd: (req, res) => {
        res.render('formProd');
    },
    detail: (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('productDetail', {product});
    },

    // Create - Form to create
	create: (req, res) => {
		const product = products.find (element => element.id == req.params.id)
		res.render("product-create-form", {product})
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
    res.redirect("/productDetail/" + id); //me redirige como pide el ejercicio, a la ruta /products//
    },

    	// Update - Form to edit
	edit: (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('product-edit-form', {product});
    }, //http://localhost:3000/product/7/edit asi sería la ruta en localhost

	// Update - Method to update----PENDIENTE
	update: (req, res) => {
		const product = products.find(element => element.id == req.params.id)
        res.render('product-edit-form', {product});// Do the magic
        
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
    


}
    module.exports = controller;