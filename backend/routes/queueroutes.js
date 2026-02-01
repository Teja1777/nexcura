const express = require("express");
const router = express.Router();

// In-memory queue
let queue = [];
let currentToken = 0;
const AVG_TIME_PER_PATIENT = 5; // minutes

// Generate new token
router.post("/token", (req, res) => {
  const newToken = queue.length + currentToken + 1;
  queue.push(newToken);

  const estimatedWait =
    (newToken - currentToken - 1) * AVG_TIME_PER_PATIENT;

  res.json({
    token: newToken,
    estimatedWaitTime: `${estimatedWait} minutes`
  });
});

// Get queue status
router.get("/queue", (req, res) => {
  res.json({
    currentToken,
    waitingQueue: queue,
    totalWaiting: queue.length
  });
});

// Move to next token (doctor/admin action)
router.post("/next", (req, res) => {
  if (queue.length === 0) {
    return res.json({ message: "No patients in queue" });
  }

  currentToken = queue.shift();
  res.json({
    message: "Next patient called",
    currentToken
  });
});

module.exports = router;