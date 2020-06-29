require("dotenv").config({path: ".env.local"});
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// MongoDB Setup
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hj9sw.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`;
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

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const serverName = dev ? `http://localhost:${PORT}` : "https://textthoughts.com";

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Routes
  app.get("/about", (req, res) => app.render(req, res, "/about", req.query));
  app.get("/hobo", (req, res) => { 
    res.send({good: "stuff"}) 
  });
  app.all("*", (req, res) => handle(req, res));

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server started on http://localhost:${port}`);
  });
})
