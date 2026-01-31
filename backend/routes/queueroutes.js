const express = require("express");
const router = express.Router();

router.get("/queue", (req, res) => {
  res.json({
    message: "Queue API working",
    currentToken: 5
  });
});

module.exports = router;