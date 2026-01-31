const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});