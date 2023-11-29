import mongoose from "mongoose";
import app from "./app.js"

const { DB_HOST } = process.env;

// connecting to database and running server

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Successfully connected to database");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
