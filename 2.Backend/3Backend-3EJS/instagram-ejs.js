const express=require("express");
const app=express();
const port=3000;
app.set("view engine", "ejs");
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username})
});