const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());

  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", req.query)
  });

  server.get("/profile", (req, res) => {
    return app.render(req, res, "/profile", req.query)
  });

  server.all("*", (req, res) => {
    return handle(req, res)
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
})
