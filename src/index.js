 const User = require("./Models/user")
const express = require("express");
 const connectDB = require("./config/database")
 
let app = express();



app.post("/user", async  (req , res)=>{
  const  user = new User({
    firstName :"virat ",
    lastName: "kohli",
    age: 20,
    email: "viratkohli@gmail.com",
    gender: "male"
  }) 


  await user.save()
 res.send("user addes successfully")
})


connectDB().then(()=>{
  console.log("connect to th DB is successfully");
  app.listen(7777, () => {
  console.log("server is successfully listing to on port 7777");
});
  
}).catch((err)=>{
  console.log("cannot connect to DB the is a error"); 
  
})


