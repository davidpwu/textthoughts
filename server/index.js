require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

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
app.use(cors());

const handleSignIn = () => (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json("Incorrect form submission");
  }
  res.send({email: password});
  // db.select('email', 'hash').from('login')
  //   .where('email', '=', email)
  //   .then(data => {
  //     const isValid = bcrypt.compareSync(password, data[0].hash);
  //     if (isValid) {
  //       return db.select('*').from('users')
  //         .where('email', '=', email)
  //         .then(user => {
  //           res.json(user[0])
  //         })
  //         .catch(err => res.status(400).json('unable to get user'))
  //     } else {
  //       res.status(400).json('wrong credentials')
  //     }
  //   })
  //   .catch(err => res.status(400).json('wrong credentials'))
}

// Priority serve any static files
app.use(express.static(path.resolve(__dirname, "../textthoughts-ui/build")));

// Answer API requests
// app.get("/api", function (req, res) {
//   res.set("Content-Type", "application/json");
//   res.send('{"message":"Hello from the custom server!"}');
// });

app.get("/hobo", (req, res) => { 
  res.send({good: "stuff"});
});

app.post("/signin", handleSignIn());

// Test Passport
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  }
);

// All remaining requests return the React app, so it can handle routing
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../textthoughts-ui/build", "index.html"));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on http://localhost:${port}`);
});
