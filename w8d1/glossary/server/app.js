const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const entries = require("./data/entriesData");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/entries", (req, res) => {
  res.json(entries);
});

app.post("/api/entries", (req, res) => {
  const { entry } = req.body;
  const id = entries.length + 1;

  entry.id = id;
  entries.push(entry);

  console.log(req.body);
  setTimeout(() => {
    res.json(id);
  }, 4500);
});

const users = [1, 2, 3, 4, 5];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { id } = req.body;

  users.push(id);

  res.send("ok");
});

module.exports = app;
