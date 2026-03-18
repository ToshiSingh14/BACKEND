const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  
  res.json({name: "toshi"});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});