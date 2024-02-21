// import * as express from "express";
const express = require("express");
const path = require("path");
const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});
