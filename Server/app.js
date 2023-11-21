const express = require("express");
const mongoose = require("mongoose");
const TodoRoutes = require("./Route/TodoRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const Port = process.env.PORT;
const DB = process.env.DATABASE;

//   Database Connect query
mongoose
  .connect(DB)
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server listen port is${Port} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(TodoRoutes);
