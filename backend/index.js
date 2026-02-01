const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5050;

const queueRoutes = require("./routes/queueroutes");

app.use(cors());
app.use(express.json());

// IMPORTANT LINE
app.use("/api", queueRoutes);

app.get("/", (req, res) => {
  res.send("Server root working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});