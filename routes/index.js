const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/user", (req, res) => {
  res.render("message", {
    user: req.query.user,
    text: req.query.text,
    date: req.query.date,
  });
});

module.exports = router;
