const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/producto');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage}); //la segunda es la variable definada antes// 


router.get('/create', productController.formProd);
router.get('/:id/detail', productController.detail);
/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.get('/product-create-form', productController.create);
router.post('/create', upload.single("image"), productController.store); 


// router.get('/detalleProducto_bananas', productController.bananas);
// router.get('/detalleProducto_kiwi', productController.kiwi);
// router.get('/detalleProducto_brocoli', productController.brocoli);
// router.get('/detalleProducto_champignon', productController.champignon);
// router.get('/detalleProducto_lechuga', productController.lechuga);
// router.get('/detalleProducto_limon', productController.limon);
// router.get('/detalleProducto_mandarina', productController.mandarina);
// router.get('/detalleProducto_papa', productController.papa);
// router.get('/frutasOrganicas', productController.frutasOrganicas);
// router.get('/verdurasOrganicas', productController.verdurasOrganicas);
// router.get('/bolsonesYPromos', productController.bolsonesYPromos);
// router.get('/nuestrasRecetas', productController.nuestrasRecetas);

module.exports = router;
