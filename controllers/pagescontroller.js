const { Catalog } = require("../models");

exports.home = (req, res) => {
  const title = "Hello World",
    subTitle = "Welcome to the Heaven!";
  res.render("index", { title, subtitle });
};

exports.about = (req, res) => {
  const title = "Hello Peeps",
    subTitle = "Welcome to the About Me!";
  res.render("about", { title, subTitle });
};

exports.catalog = async (req, res) => {
  const title = "Hello World",
    subTitle = "Welcome Home!";
  const catalogs = await Catalog.findAll();
  console.log(catalogs);
  res.render("catalog", { title, subTitle, articles });
};
