const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is working well!");
});

app.listen(port, () => {
  console.log(`app is listening at post : ${port}`);
});

threads = [
  {
    username: "Nouman",
    content: "Hi everyone this is my first thread!",
  },
  {
    username: "Hamza",
    content: "Hi everyone how is the weather today!",
  },
  {
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
  let { username, content } = req.body;
  threads.push({ username, content });
  console.log(username);
  res.render("index.ejs");
});
