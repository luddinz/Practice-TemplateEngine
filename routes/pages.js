const express = require("express");
const { home, about, catalog } = require("../controllers/pagesControllers");
const router = express.Router();

/* GET home page. */
router.get("/", home);
router.get("/about", about);
router.get("/catalog", catalog);

module.exports = router;
