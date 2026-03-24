const express = require("express");
const app = express();



app.use((req,res,next)=>{
  console.log("request recieved at "+req.url); // global middleware
});

app.get("/sum", app.use((req,res,next)=>{
  console.log("request recieved at "+req.url); 
}) next()
  ,(req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) + parseInt(req.query.b));
  
});
app.get("/sub", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) - parseInt(req.query.b));
  
});
app.get("/multiply", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) * parseInt(req.query.b));
  
});
app.get("/divide", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) / parseInt(req.query.b));
  
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});