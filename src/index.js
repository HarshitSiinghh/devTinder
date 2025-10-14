const express = require("express");
let app = express();

//this will only handle get aall methods / user
app.get("/user",(req, res) => {
   res.send({firstName:"Harshit ", lastName:"singh"})

})
app.post("/user",(req, res) => {
 //saving data to dB

   res.send("data saved to the database")

})

app.delete("/user",(req, res) => {
 //saving data to dB

   res.send("deleted successfully")

})


//this will send them all http method API call to /test 
app.use("/test", (req, res) => {
  res.send("hello form the test");
});



app.listen(7777, () => {
  console.log("server is successfully listing to on port 7777");
});
