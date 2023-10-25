const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/rolldice",(req,res)=>{
    let rand=Math.floor(Math.random()*6)+1;
    res.render("condition.ejs",{rand});
})