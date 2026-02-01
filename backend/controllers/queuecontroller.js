let queue = [];
let currentToken = 1;

// Generate new token
exports.generateToken = (req, res) => {
  const token = {
    tokenNumber: currentToken,
    status: "waiting",
    createdAt: new Date()
  };

  queue.push(token);
  currentToken++;

  res.json({
    message: "Token generated",
    token
  });
};

// Get full queue
exports.getQueue = (req, res) => {
  res.json(queue);
};

// Serve next token
exports.serveNext = (req, res) => {
  if (queue.length === 0) {
    return res.json({ message: "No patients in queue" });
  }

  const servedToken = queue.shift();
  servedToken.status = "served";

  res.json({
    message: "Token served",
    servedToken
  });
};