const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("hello listening");
});
// app.get("/:username",(req,res)=>{
//     let{username}=req.params;
//     res.send(`Your name is ${username}`);
// })
// app.get("/:username/:id",(req,res)=>{
//     let{username,id}=req.params;
//     res.send(`Your name is ${username} and your id is: ${id} `);
// })
app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
let html=`<h1>Your name is ${username} and your id is: ${id} </h1>`;
    res.send(html);
})