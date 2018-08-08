const express = require("express");
const app = express();
const howler = require("howler");

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.render("index", { sounds: JSON.stringify(sounds), soundTest: sounds });
  res.render("index");
});

app.get("/stage1", (req,res) => {
  res.render("stages/stage1");
});

app.get("/stage2", (req,res) => {
  res.render("stages/stage2");
});

app.get("/*", (req,res) => {
  res.redirect("/");
})

app.listen(3000, () => {
  console.log("starting now");
});
