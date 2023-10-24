const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("hello listening");
});
app.get("/search",(req,res)=>{
    let {q,color}=req.query;
    // console.log(req.query) this is for printing search queries in node.js
    res.send(`these are query results.....!${q} and the color is=${color}`);
})