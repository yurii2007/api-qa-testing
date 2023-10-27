const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Successfully connected to database");
    });
  })
  .catch((error: Error) => {
    console.log(error.message);
    process.exit(1);
  })