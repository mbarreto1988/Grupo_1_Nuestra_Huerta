const express = require("express");

const inicioController = require("../controllers/inicioController");

const router = express.Router();

router.get("/", inicioController.inicio);
// router.get("/about", inicioController.about);

module.exports = router;