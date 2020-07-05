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

// Priority serve any static files
app.use(express.static(path.resolve(__dirname, "../textthoughts-ui/build")));

// Answer API requests
// app.get("/api", function (req, res) {
//   res.set("Content-Type", "application/json");
//   res.send('{"message":"Hello from the custom server!"}');
// });

// app.get("/hobo", (req, res) => { 
//   res.send({good: "stuff"}) 
// });

// All remaining requests return the React app, so it can handle routing
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../textthoughts-ui/build", "index.html"));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on http://localhost:${port}`);
});
