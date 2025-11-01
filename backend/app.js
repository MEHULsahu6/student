const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authController = require("./controllers/auth/auth.controller.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use("/api", require("./routes/auth.routes.js"));

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
