const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/home",(req,res)=>{
  res.send("This is Bharath")
})