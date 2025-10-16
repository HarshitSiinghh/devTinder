const mongose = require("mongoose")


const connectDB = async ()=>{
  await mongose.connect("mongodb+srv://harshit_singh0011:oJVi4l3wNaiwVlVg@namastenode.zcbq2hm.mongodb.net/?retryWrites=true&w=majority&appName=namastenode/devTinder")
}  
module.exports ={ connectDB}


