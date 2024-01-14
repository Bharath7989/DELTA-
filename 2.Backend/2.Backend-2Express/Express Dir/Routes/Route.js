const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("hello listening");
});
app.get("/",(req,res)=>{
    res.send("This is home path");
});
app.get("/home",(req,res)=>{
    res.send("This is home path");
});
app.get("/apple",(req,res)=>{
    res.send("This is apple path");
});
app.get("/mango",(req,res)=>{
    res.send("This is mango path");
})