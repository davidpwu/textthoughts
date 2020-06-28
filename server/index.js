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

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());

  // server.get("/about", (req, res) => {
  //   return app.render(req, res, "/about", req.query)
  // });

  server.get("/hobo", (req, res) => {
    res.send({"what": "the"});
  });

  server.all("*", (req, res) => {
    return handle(req, res)
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server started on http://localhost:${PORT}`);
  });
})
