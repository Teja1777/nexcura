let queue = [];
let currentToken = 1;
const AVG_TIME_PER_PATIENT = 10; // 10 minutes per patient

// Generate new token
exports.generateToken = (req, res) => {
  const { name } = req.body;
  const peopleAhead = queue.length;
  const estimatedWaitTime = peopleAhead * AVG_TIME_PER_PATIENT;

  const token = {
    tokenNumber: currentToken,
    patientName: name || "Guest",
    status: "waiting",
    createdAt: new Date(),
    estimatedWaitTime: `${estimatedWaitTime} minutes`
  };

  queue.push(token);
  currentToken++;

  res.json({
    message: "Token generated",
    token,
    estimatedWaitTime: `${estimatedWaitTime} minutes`
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