const express = require("express");
let cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("static"));
const port = 3010;

let tasks = [
  { taskId: 1, text: "Fix bug #101", priority: 2 },
  { taskId: 2, text: "Implement feature #202", priority: 1 },
  { taskId: 3, text: "Write documentation", priority: 3 },
];

function addTaskToTaskList(task) {
  tasks.push(task);
}

app.get("/tasks/add", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const text = req.query.text;
  const priority = parseInt(req.query.priority);
  addTaskToTaskList({ taskId: taskId, text: text, priority: priority });
  res.send({ tasks: tasks });
});

app.get("/tasks", (req, res) => {
  res.send({ tasks: tasks });
});

function sortByPriority(task1, task2) {
  return task1.priority - task2.priority;
}

app.get("/tasks/sort-by-priority", (req, res) => {
  tasks.sort(sortByPriority);
  res.send({ tasks: tasks });
});

function editThePriority(taskId, priority) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].priority = priority;
    }
  }
}

app.get("/tasks/edit-priority", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const priority = parseInt(req.query.priority);
  editThePriority(taskId, priority);
  res.send({ tasks: tasks });
});

function editTheTaskText(taskId, text) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].text = text;
    }
  }
}

app.get("/tasks/edit-text", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const text = req.query.text;
  editTheTaskText(taskId, text);
  res.send({ tasks: tasks });
});

app.get("/tasks/delete", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  let deletdTasks = tasks.filter((task) => task.taskId != taskId);
  res.send({ tasks: deletdTasks });
});

app.get("/tasks/filter-by-priority", (req, res) => {
  const priority = parseInt(req.query.priority);
  const filteredTasks = tasks.filter((task) => task.priority == priority);
  res.send({ tasks: filteredTasks });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
