const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
