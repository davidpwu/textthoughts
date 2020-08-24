require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const expressSession = require("express-session");

const User = require("./models/user");

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

// Passport Setup
// passport.use(new LocalStrategy(
//   (username, password, done) => {
//     User.findOne({username: username}, (err, user) => {
//       if (err) { 
//         return done(err); 
//       }
//       if (!user) {
//         return done(null, false, {message: "Incorrect username."});
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, {message: "Incorrect password."});
//       }
//       return done(null, user);
//     });
//   }
// ));

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
// app.use(expressSession({
//   secret: process.env.SESSION_KEY,
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const handleSignUp = () => (req, res) => {
  const {username, password} = req.body;
  User.register(new User({username: username}), password, (err, user) => {
    if(err) {
      console.log(err);
    } else {
      console.log(user);
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secret");
      });
    }
  });
}

const handleSignIn = () => (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json("Incorrect form submission");
  }
  res.json(req.body);
}

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect("/signin");
// }

// Priority serve any static files
app.use(express.static(path.resolve(__dirname, "../textthoughts-ui/build")));

app.post("/signup", handleSignUp());

app.post("/signin", handleSignIn());
// app.post("/signin",
//   passport.authenticate("local", { successRedirect: "/",
//                                    failureRedirect: "/signin",
//                                    failureFlash: true })
// );

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// All remaining requests return the React app, so it can handle routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../textthoughts-ui/build", "index.html"));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on http://localhost:${port}`);
});
