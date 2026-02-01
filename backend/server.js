const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5050;

const queueRoutes = require("./routes/queueroutes");

app.use(cors());
app.use(express.json());

app.use("/api", queueRoutes);

app.get("/", (req, res) => {
  res.send("Server root working");
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});