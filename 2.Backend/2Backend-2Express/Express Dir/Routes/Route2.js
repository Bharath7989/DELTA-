const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("hello listening");
});
app.get("/home",(req,res)=>{
    res.send("This is home path");
});
app.get("/google",(req,res)=>{
    res.send("This is google path");
});
app.get("/youtube",(req,res)=>{
    res.send("This is Youtube path");
})

//this path works when user enters in  WRONG path
app.get("*",(req,res)=>{
    res.send("this path doesn't exits...!");
})