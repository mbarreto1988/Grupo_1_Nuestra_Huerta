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

/*** CREATE ONE PRODUCT ***/
router.get('/create', productController.formProd);
router.get('/:id/detail', productController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.get('/product-create-form', productController.create);
router.post('/create', upload.single("image"), productController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update); 


/*** DELETE ONE PRODUCT ***/ 
// router.delete('/:id', productController.destroy); 

module.exports = router;

