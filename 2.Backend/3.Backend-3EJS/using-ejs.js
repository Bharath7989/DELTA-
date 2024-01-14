const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.set("view engine","ejs");
app.get("/home",(req,res)=>{
    res.send("This is home page")
})
app.get("/file",(req,res)=>{
    res.render("index.ejs");
})