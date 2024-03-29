const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/bmi-calc.html");
});

app.post("/", function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height );
  var bmi = Math.floor((weight/ (height*height)));
  res.send("Your bmi is " + bmi);
});

app.listen("3000",function(req,res){
  console.log("Server at 3000");
});
