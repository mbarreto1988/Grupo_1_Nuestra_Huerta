const express = require("express");

const bananasController = require("../controllers/bananasController");

const router = express.Router();

router.get("/", bananasController.inicio);

module.exports = router;