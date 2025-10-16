  const adminAuth = (req, res, next)=>{
  const token = "xyz"
 const  authorized = (token ==="xyz")
  if(!authorized){
    res.status(401).send(" request is not authorized")

  }
  else{
    next()
  }
   
} 

module.exports ={
  adminAuth,
}