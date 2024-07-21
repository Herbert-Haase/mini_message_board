// app.js
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const usersStorage = require("./storages/usersStorage");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/users", usersRouter);
app.get("/", (req, res) => {
  res.render("index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
});
let searchUsers;

app.post("/users/search", (req, res) => {
  const { firstName, lastName, email } = req.body;
  searchUsers = usersStorage.searchUser(firstName, lastName, email);
  res.redirect("/users/search");
});

app.get("/users/search", (req, res) => {
  res.render("search", { users: searchUsers });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
