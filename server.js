//Require express
var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

//Allows for static content for the app from the 'public' directory.
app.use(express.static("public"));

//Middleware

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Requires Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports routes from controller
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server is listening on http://localhost:" + PORT);
});