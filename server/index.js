const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  // allow preflight
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

let todos = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
];

app.get("/todos", (_, res) => {
  res.send(todos);
});

app.post("/add", (req, res) => {
  const { title } = req.body;
  const id = Date.now();
  const todo = { id: id, title: title, completed: false };
  todos.push(todo);
  res.json({ ok: true, todo });
});

app.patch("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const index = todos.findIndex((todo) => todo.id === +id);
  let todo = todos.filter((todo) => todo.id === +id)[0];
  todos[index].completed = completed;
  todo.completed = completed;

  res.json(todo);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === +id);
  let todo = todos.filter((todo) => todo.id === +id)[0];
  todos = todos.filter((todo) => todo.id !== +id);

  res.json(todo);
});


app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
