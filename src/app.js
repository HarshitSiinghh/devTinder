const express = require("express")
const app = express()


 app.use("/",(req, res)=>{
  res.send(" this is response for / data ")
 })


app.listen(3000,()=>{
  console.log("server at 3000 code is created successfully ");
  
})