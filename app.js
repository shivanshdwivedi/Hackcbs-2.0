//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/", function(req, res){
  res.render('index');
});

app.get("/login", function(req, res){
  res.render('login');
});

app.get("/sellerlogin", function(req, res){
  res.render('sellerlogin');
});




app.listen(4000, function(){
  console.log("Server started on port 4000.");
});
 