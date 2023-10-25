/*here this index2.ejs file is created for accessing anywhere 
 means we can access it on previous folder also(from backend folder). which is not in first (index.js) file.*/

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
app.get("/html",(req,res)=>{
    res.render("index2.ejs");
})
const path=require("path");  //this is setting up for path means if we run this file from "backend" although the file run without any error.
app.set("views",path.join(__dirname,"/views"));