require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// MongoDB Setup
const mongoUri = process.env.DB_URI;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB", err);
});

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.get("/hobo", (req, res) => { 
  res.send({good: "stuff"}) 
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on http://localhost:${port}`);
});
