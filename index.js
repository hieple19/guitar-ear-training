const express = require("express");
const app = express();
const howler = require("howler");

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.render("index", { sounds: JSON.stringify(sounds), soundTest: sounds });
  res.render("index");
});

app.get("/stage1/scr", (req,res) => {
  res.render("stages/stage1/stage1scr");
});

app.get("/stage1/cpr", (req,res) => {
  res.render("stages/stage1/stage1cpr");
});

app.listen(3000, () => {
  console.log("starting now");
});
