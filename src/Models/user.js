const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 4,
    maxLength:10000000000000,
    
    required : true

  },
  userName:{
    type: String,
    unique: true,
    trim: true,
    required: true


  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    min:18
  },
  email: {
    type: String,
     required: true,
     unique: true,
     trim: true,
     lowercase: true
  },
  password: {
    type: String,
       required: true,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male", "female", "others"].includes(value)){
        throw new Error("ganeder is not valid")
      }
    }
  },
  skills:{
     type :[String]
  },
  photoURL:{
    type: String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2YIklRLu0Bb2K-lsZXW5ApBwW28EorlGh6pADEOY89iQAEJU7xRo&usqp=CAE&s"
  },
  About:{
  type: String,
   default : "this is deafult about of user"
  }
}, {timestamps: true});
const userModel = mongoose.model("User", userSchema)


module.exports =  userModel