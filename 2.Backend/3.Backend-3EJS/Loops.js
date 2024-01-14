const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/:username",(req,res)=>{
let {username}=req.params;
let followers=["sai","teja","pavan","yash","manu","junnu"];
res.render("Loops.ejs",{username,followers});
})
