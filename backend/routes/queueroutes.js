const express = require("express");
const router = express.Router();

const {
  generateToken,
  getQueue,
  serveNext
} = require("../controllers/queuecontroller");

router.post("/token", generateToken);
router.get("/queue", getQueue);
router.post("/serve", serveNext);

module.exports = router;