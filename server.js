var express = require("express");
var bodyParser = require("body-parser")

var app = express();
var path = __dirname + "/public/";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res){
	res.sendFile("index.html")
});

app.get("/contact", function(req, res){
	res.sendFile(path + "contact.html")
})

app.get("/about", function (req, res){
	res.sendFile(path + "about.html")
});
app.get("/pages", function(req, res){
	res.sendFile(path + "pages.html")
})





app.listen(12420)