const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("The port was listening.....!")
});
//here in the below we done for get request. 
//but in post we are not getting query strings as we can see..
app.get("/register",(req,res)=>{
    let{Name,pass}=req.query;
    console.log(Name,"",pass)
    res.send(`This is get request from ${Name} and ${pass}`)
})
//NOTE: here in post not getting query strings because request goes through the body.
app.post("/register",(req,res)=>{
    let{Name,pass}=req.query;
    console.log(Name,"",pass)
    res.send(`This is get request from ${Name} and ${pass}`)

})