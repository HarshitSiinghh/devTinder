const mongoose = require("mongoose")
const userschema = mongoose.Schema({
firstName :{
  type : String
}, 
lastName :{
  type: String
},
 age:{
  type: Number
 },
 contactNo :{
  type: Number
 },
 mail:{
  type: String
 },
 gender:{
type : String
 }

})
const user  = mongoose.model("User", userschema)
module.exports = user