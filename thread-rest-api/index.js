const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("server is working well!");
});

threads = [
  {
    id: uuidv4(),
    username: "Nouman",
    content: "Hi everyone this is my first thread!",
  },
  {
    id: uuidv4(),
    username: "Hamza",
    content: "Hi everyone how is the weather today!",
  },
  {
    id: uuidv4(),
    username: "Hassan",
    content: "Good morning everyone!",
  },
];

app.get("/thread", (req, res) => {
  res.render("index.ejs", { threads });
});

app.get("/thread/new", (req, res) => {
  res.render("newThread.ejs");
});

app.post("/thread", (req, res) => {
  let id = uuidv4();
  let { username, content } = req.body;
  threads.push({ id, username, content });
  res.render("index.ejs");
});

app.get("/thread/:id", (req, res) => {
  let { id } = req.params;
  thread = threads.find((thread) => id === thread.id);
  res.render("details.ejs");
});

app.patch("/thread/:id", (req, res) => {
  let { id } = req.params;
  thread = threads.find((thread) => id == thread.id);
  let newContent = req.body.content;
  thread.content = newContent;
  res.redirect("/thread");
});

app.get("/thread/:id/edit", (req, res) => {
  let { id } = req.params;
  thread = threads.find((thread) => id === thread.id);
  res.render("edit.ejs", { thread });
});

app.delete("/thread/:id", (req, res) => {
  let { id } = req.params;
  threads = threads.filter((thread) => id !== thread.id);
  res.redirect("/thread");
});

app.listen(port, () => {
  console.log(`app is listening at post : ${port}`);
});
