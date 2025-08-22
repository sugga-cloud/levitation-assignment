const express = require("express");
const { json } = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const billRoutes = require("./routes/billRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(json());
app.use(cors({
  origin: "http://localhost:https://levitation-assignment-1-dfzs.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bills", billRoutes);

// Example Protected Route
const { authMiddleware } = require("./middleware/authMiddleware");
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome to your profile", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
