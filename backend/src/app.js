const express = require("express");
const cors = require("cors");
const {
  color,
  log,
  cyan,
  magenta,
} = require("console-log-colors");

const userData = require("./userData");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/users", (req, res) => {
  console.log(magenta("Request received at /api/users and sent response"));
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(cyan(`Server is running on http://localhost:${PORT}`));
});
