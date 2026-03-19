const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
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