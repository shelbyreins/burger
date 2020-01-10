//Required dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

//Run express
var app = express();

//Set up port 
var PORT = procoess.env.PORT || 8080;

//body parser elements, static route files and templete engine connections
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routes 
var routes = require("./controllers/catsController.js");
app.use(routes);

//Port listen
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });