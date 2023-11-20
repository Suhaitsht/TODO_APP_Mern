const express = require("express");
const mongoose = require("mongoose");
const Task = require("./Module/TaskModule");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
const PORT = 4000;
const DATABASE =
  "mongodb+srv://suhait:suhait123@cluster0.bwfnbi4.mongodb.net/?retryWrites=true&w=majority";

//   Database Connected
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listen port is${PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Create Route
app.post("/task", (req, res) => {
  const taskTodo = new Task(req.body);
  taskTodo
    .save()
    .then((result) => {
      res.send("ok");
    })
    .catch((err) => {
      res.status(400).json({
        status: "failed",
        message: err,
      });
    });
});

app.get("/getTask", (req, res) => {
  Task.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/deleteTask/:id", (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getSingleTask/:id", (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/UpdateTask/:id", (req, res) => {
  const { id } = req.params;
  const { Utask } = req.body;
  console.log(id, Utask);
  Task.findByIdAndUpdate({ _id: id }, { task: Utask }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
