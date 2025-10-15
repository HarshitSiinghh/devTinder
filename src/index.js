const express = require("express");
let app = express();

//this will only handle get aall methods / user
app.use("/user",(req, res, next) => {
   res.send("responsed ")
   next()

},
 
 (req, res) => {
   res.send("responsed 2nd ")

}

)





app.listen(7777, () => {
  console.log("server is successfully listing to on port 7777");
});
