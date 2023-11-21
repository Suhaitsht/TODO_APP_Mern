const Task = require("../Module/TaskModule");

exports.createTask = (req, res) => {
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
};

exports.getAllTask = (req, res) => {
  Task.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSingleTask = (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { Utask } = req.body;
  Task.findByIdAndUpdate({ _id: id }, { task: Utask }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
