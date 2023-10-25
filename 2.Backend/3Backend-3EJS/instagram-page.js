const express=require("express");
const app=express();
const port=3000;
app.set("view engine", "ejs");
app.listen(port,(req,res)=>{
  console.log("server is running..")
});
app.get("/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
    res.render("instagram-page.ejs",{data});
    }
    else{
      res.render("instagram-page-error.ejs");
    }
});