const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur mon API !" });
});

module.exports = router;
