const express = require("express");
 const {connectDB}=require("./config/database")
let app = express();


connectDB().then(()=>{
  console.log("connect to th DB is successfully");
  app.listen(7777, () => {
  console.log("server is successfully listing to on port 7777");
});
  
}).catch((err)=>{
  console.log("cannot connect to DB the is a error");
  
})


