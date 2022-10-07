// ℹ️ import requires
require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// ℹ️ configure port
const port = process.env.PORT || 3001;

const app = express();

// ℹ️ set up morgan to log http errors
app.use(morgan("dev"));

// ℹ️ set up cross origin resource sharing

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// ℹ️ setup body parser
app.use(express.json());

// ℹ️ Connects to the database
require("./db");

// ℹ️ Set up routes
const authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Brew List home path!");
});

// ℹ️ Set up server listener
app.listen(port, () => {
  console.log("Server is listening on port 3001!");
});
