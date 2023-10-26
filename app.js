const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use((_, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(({ status = 500, message = "Server Error" }) => {
  res.status(status).json(message);
});

module.exports = app;