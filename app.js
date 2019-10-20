//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

if(u===p)
{
  rate = (rate) - (0.5)(rate);
}
else
{
  rate = rate -(0.7)(rate);
}
    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
 