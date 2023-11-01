const express=require("express");
const app=express();
const port=3000;
app.listen(port,(req,res)=>{
    console.log("The port was listening.....!")
});
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//here in the below we done for get request. 
app.get("/register",(req,res)=>{
    let{Name,pass}=req.query;
    console.log(Name,"",pass)
    res.send(`This is get request from ${Name} and ${pass}`)
})
app.post("/register",(req,res)=>{
    //by using below and line we are getting query strings
    //but without---> "app.use(express.urlencoded({extended:true})) i.e line:7" is not understand express..
    let{Name,pass}=req.body;
    console.log(req.body)
    res.send(`This is get request from ${Name} and ${pass}`)

})