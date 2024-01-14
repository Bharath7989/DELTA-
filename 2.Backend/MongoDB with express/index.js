const express=require("express");
const app=express();
const mongoose = require('mongoose');
const chat=require("./models/chat.js");
const path=require("path");
const methodOverride=require("method-override")
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"))
async function main(){
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

main().then((res,err)=>{
console.log("success");
})
.catch((err)=>{
    console.log("failed");
})
const port=3000;
app.listen(port,(res,req)=>{
console.log(`The port running successfully ${port}`);
})

//showing all chats
app.get("/chats", async(req,res)=>{
let chats=await chat.find()
res.render("index.ejs",{chats})
})
//new chat
app.get("/chats/new",(req,res)=>{
res.render("newChat.ejs");
})
//create route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body
    let newChat=new chat({
        from:from,
        to:to,
        msg:msg,
        date:new Date()
    });
   newChat.save().then(()=>{
    console.log("successfully saved");
   })
   .catch(()=>{
    console.log("not saved");
   })
    res.redirect("/chats");
})
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let dbChat = await chat.findById(id);
    res.render("edit.ejs",{dbChat});
})
//update route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
    console.log(updatedChat)
    res.redirect("/chats");
})

//delete route
app.delete("/chats/:id", async(req,res)=>{
       let {id}=req.params;
       console.log(id)
       let deleted= await chat.findByIdAndDelete(id);
       console.log(deleted);
       res.redirect("/chats");
})
app.get("/chats/apple",(req,res)=>{
    let {name}=req.query;
    console.log(name);
    res.redirect("/chats")
})