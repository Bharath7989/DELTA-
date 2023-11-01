const express=require("express");
const app=express();
const port=3000;
const {v4:uuidv4}=require("uuid");
let methodOverride = require('method-override')

//the below five lines are for accesing from different path and auto  access files from views and public
//and also for accesing post request data
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"))
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.listen(port,()=>{
    console.log("Port was listeninig..!")
})
app.get("/",(req,res)=>{
res.send("server is running perfect...!")
})
let posts=[
    {
        id:uuidv4(),
        username:"Bharath",
        content:"hardwork is important to achieve success"
    },
    {
        id:uuidv4(),
        username:"Sai",
        content:"searching gold but got the diamond."
    },
    {
        id:uuidv4(),
        username:"Teja",
        content:"The person that doesn't exist....!"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("newPost.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content})
    res.redirect("/posts"); //this line which redirects to the "/posts" page.
})
//the below code is for individual for post
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let foundPost=posts.find((p)=>{
        return (p.id===id);
    });
    if(!foundPost){
    res.render("error.ejs",{id});
    }
    else{
    res.render("show.ejs",{foundPost}); 
    }
   //here above this two line is used to search that id  is existing or not in posts.
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
     let post=posts.find((p)=>{
        return (p.id===id);
    });
    post.content=newContent;
    res.redirect("/posts")
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>{
        return (p.id===id);
    });
    res.render("edit.ejs",{post},);
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>{
        return (id!==p.id);
    });

        res.redirect("/posts")
})