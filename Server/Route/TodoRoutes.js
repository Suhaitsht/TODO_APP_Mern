const { Router } = require("express");
// import from todocontroller module
const TodoController = require("../Controller/TodoContrller");
const router = Router();

// create Todotask
router.get("/task", TodoController.createTask);
// get all created task
router.get("/getTask", TodoController.getAllTask);
// get single todo task
router.get("/getSingleTask/:id", TodoController.getSingleTask);
// deleted selected single task
router.delete("/deleteTask/:id", TodoController.deleteTask);
// updated selected single task
router.put("/UpdateTask/:id", TodoController.updateTask);

module.exports = router;
