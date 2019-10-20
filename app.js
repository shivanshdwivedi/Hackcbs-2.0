//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));






app.get("/", function(req, res){
  res.render('index');
});

app.get("/login", function(req, res){
  res.render('login');
});

app.get("/sellerlogin", function(req, res){
  res.render('sellerlogin');
});

app.get("/page1", function(req, res){
  res.render('page1');
});

app.get("/page2", function(req, res){
  res.render('page2');
});

app.get("/page3", function(req, res){
  res.render('page3');
});

app.get("/page4", function(req, res){
  res.render('page4');
});



app.post("/page2", function(req,res){
  res.render('page2');
});


app.post("/page3", function(req,res){
  res.render('page3');
});



app.listen(4000, function(){
  console.log("Server started on port 4000.");
});
 