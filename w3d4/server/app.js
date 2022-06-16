require("dotenv").config(); // Reads the content of .env and add them to process.env
const express = require("express"); // Imports the express framework / library
const path = require("path"); // Compat for file paths
const cookieParser = require("cookie-parser"); // Parses the cookie string to fancy cookie object
const logger = require("morgan"); // Logs URL requests
const cookieSession = require("cookie-session"); // Parse & Encrypt / Decrypt the cookie string
const bcrypt = require("bcryptjs"); // Hashing functionality for our app

const app = express(); // Instantiate the express server and we call it app
const app2 = express(); // Instantiate the express server and we call it app2
const salt = bcrypt.genSaltSync(10); // Generate salt values for hashing

// view engine setup
app.set("views", path.join(__dirname, "views")); // Specify where the templates are
app.set("view engine", "ejs"); // We specify what we want to use (EJS)

// Middlewares
app.use(logger("dev")); // Activate the logger in "dev" mode
app.use(express.json()); // Will parse the incoming payload (cargo / content / data) from JSON -> Object
app.use(express.urlencoded({ extended: false })); // Will parse the incoming payload (cargo / content / data) from form -> Object
app.use(cookieParser()); // Parses the cookie string to fancy cookie object
app.use(express.static(path.join(__dirname, "public"))); // Enables read access to the public folder in our server
app.use(
  cookieSession({
    name: "session",
    keys: [
      "I like potatoes in the sun with a glass of marmalade",
      "Hello I like potato again hahahahahah",
    ],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
const user1 = {
  email: "periodic@table.com",
  name: "Dimitri Ivanovich Mendeleiv",
  password: bcrypt.hashSync(process.env.USER1_PASSWORD, salt),
  secret: "Actually prefers biology over chemistry",
};

const user2 = {
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: bcrypt.hashSync(process.env.USER2_PASSWORD, salt),
  secret: "Doesn't know how to drive stick",
};

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};
app.get("/", (request, response) => {
  return response.render("index");
});

app.get("/api/users", (request, response) => {
  response.json(userDatabaseIsh);
});

app.post("/login", (request, response) => {
  // const email = request.body.email
  // const password = request.body.password

  const { email, password } = request.body;

  if (!userDatabaseIsh[email]) {
    console.log("Bad email");
    return response.redirect("/");
  }

  // if (userDatabaseIsh[email].password !== password) {
  if (!bcrypt.compareSync(password, userDatabaseIsh[email].password)) {
    console.log("Bad password");
    return response.redirect("/");
  }

  // response.cookie("email", email);
  request.session.email = email;
  return response.redirect("/secret");
});

app.get("/secret", (request, response) => {
  // const email = req.cookies.email;
  const { email } = request.session;

  // && ||

  // true && false && true

  // let currentUser = {}
  // if(userDatabaseIsh[email]){
  //   currentUser = userDatabaseIsh[email]
  // }

  const currentUser = userDatabaseIsh[email] || {};
  // const currentUser = userDatabaseIsh[email] ? userDatabaseIsh[email] : {};

  const templateVars = {
    name: currentUser.name,
    secret: currentUser.secret,
  };

  return response.render("secret", templateVars);
});

module.exports = app;
