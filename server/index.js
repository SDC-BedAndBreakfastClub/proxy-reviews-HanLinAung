const express = require("express");
const morgan = require("morgan");
const proxy = require("http-proxy-middleware");
const path = require("path");
const newrelic = require("newrelic");
const app = express();

app.set("port", process.env.PORT || 8081);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public/")));
app.locals.newrelic = newrelic;

app.get("/", (req, res) => {
  res.redirect("/");
});

app.use(
  "/api/rooms/:listingId/reviews",
  proxy({ target: "http://13.57.17.28/" })
);
app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const reviewPath = path.join(__dirname, "../public/");
  res.sendFile(reviewPath);
});

app.listen(3000, () => {
  console.log(`server running at: http://localhost:3000`);
});
