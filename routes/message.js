const express = require("express");
const Persona = require("../controller/Persona");
const router = express.Router();

router.post("/send", Persona);

module.exports = router;
