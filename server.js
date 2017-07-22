var express = require("express");
var bodyParser = require("body-parser");


var app = express();

// Sets an initial port. 
var PORT =  3000;

// BodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routing

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Establishes server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});