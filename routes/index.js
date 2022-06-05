const express = require("express");
const router = express.Router();
const pages = require("./pages");

/* GET home page. */
router.use(pages);

module.exports = router;
