var express = require("express");
var router = express.Router();

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
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Mini Messageboard 101",
    messages: messages,
  });
});

router
  .route("/new")
  .get((req, res, next) => {
    res.render("form", {
      title: "form",
    });
  })
  .post((req, res, next) => {
    console.log(`User: ${req.body.messageUser}\nText: ${req.body.messageText}`);
    messages.push({
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date(),
    });
    res.redirect("/");
  });

module.exports = router;
