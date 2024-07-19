const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/new", newRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
