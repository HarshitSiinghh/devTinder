const User = require("./Models/user");
const express = require("express");
const connectDB = require("./config/database");
const e = require("express");

let app = express();

app.use(express.json());

app.patch("/user/:userId", async (req, res) => {
  const getEle = req.params?.userId
  const data = req.body;
  try {
const ALLOW_UPDATES = [
  "firstName",
  "userName",
  "lastName",
  "age",
  "email",
  "password",
  "gender",
  "skills"
];
     const isUpdatesAllows = Object.keys(data).every((k) => ALLOW_UPDATES.includes(k));

if(!isUpdatesAllows){
  throw new Error("Update is Not allowed of this ")
}
if(data.skills>10){
  throw new Error("skills cannot be greater then 10")

} 

    const updateEle = await User.findByIdAndUpdate(getEle, data, {
      new: true, // Return updated document
      runValidators: true
    });

    if (!updateEle) {
      return res.status(404).send("User not found");
    }
    res.send("user is updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error in update operation (catch block)");
  }
});

app.delete("/user", async(req,res)=>{
  const userID = req.body._id
  try{
    const deteletID = await User.deleteOne({_id: userID})
     if( deteletID.length ===0){
      res.status.send("not find any person with is ID")

     }
     else{
      res.send("user deleted successefully ")
     }
    

     }catch (err){
      res.send("error in this  operation in th catch block")


     }
  
})

app.get("/getuserbyname", async (req, res) => {
  const userId = req.body._id;
  try {
    const userById = await User.findById({ _id: userId });
    if (userById.length === 0) {
      res.status(400).send("Bad request");
    } else {
      res.send(userById);
    }
  } catch (err) {
    res.status(404).send("user is not founded ");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const findByMailUser = await User.find({ email: userEmail });
    if (findByMailUser.length === 0) {
      res.status(404).send("user is not found");
    } else {
      res.send(findByMailUser);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);

  const user = new User(req.body);

  try {
    await user.save();
    res.send("user addes successfully");
  } catch (err) {
    res.status(400).send("err saving the user :" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("connect to th DB is successfully");
    app.listen(7777, () => {
      console.log("server is successfully listing to on port 7777");
    });
  })
  .catch((err) => {
    console.log("cannot connect to DB the is a error");
  });
