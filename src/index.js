const express = require("express");
let app = express();
app.use("/harshit", (req, res) => {
  res.send(" harshit ");
});
app.use("/singh", (req, res) => {
  res.send("hello form the servrr singh");
});

app.listen(7777, () => {
  console.log("server is successfully listing to on port 7777");
});
