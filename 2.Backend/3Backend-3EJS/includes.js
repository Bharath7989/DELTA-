const express=require("express");
const app=express();
const port=3000;
app.set("view engine", "ejs");
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/bharath",(req,res)=>{
    res.render("includes.ejs");
})
