const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/home",(req,res)=>{
  res.send("This is Bharath")
})
app.get("/rolldice",(req,res)=>{
    //here let this file is acting like a database it sends the random number to ejs.
    let rand=Math.floor(Math.random()*6)+1;
  res.render("rolldice2.ejs",{rand});
})