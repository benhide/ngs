const express = require("express");

const server = express();

server.get("/", (reg, res) => {
  res.send("Hello Express");
});

server.get("/about", (reg, res) => {
  res.send("Hello Express - in about");
});

server.listen(4242, () => {
  console.log("Express Server is running...");
});
