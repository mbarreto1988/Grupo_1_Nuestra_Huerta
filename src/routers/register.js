const express = require("express");

const registerController = require("../controllers/registerController");

const router = express.Router();

router.get("/", registerController.inicio);

module.exports = router;