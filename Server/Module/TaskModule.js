const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    task: String,
  },
  { timestamps: true }
);

const Task = mongoose.model("Todo", TaskSchema);
module.exports = Task;
