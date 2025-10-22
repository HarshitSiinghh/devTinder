const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require : true
  },
  userName:{
    type: String,
    unique: true,
    trim: true,
    require: true


  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
     require: true,
     unique: true,
     trim: true,
  },
  password: {
    type: String,
       require: true,
  },
  gender: {
    type: String,
  },
  skills:{
     type :[String]
  }
});
const userModel = mongoose.model("User", userSchema)


module.exports =  userModel