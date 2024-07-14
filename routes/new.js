var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form", {
    title: "form",
  });
});

router.post("/", (req, res, next) => {
  console.log(`User: ${req.body.messageUser}\nText: ${req.body.messageText}`);
  res.redirect();
});

module.exports = router;
