const express=require("express");
const app=express();
const port=3000;
//the below five lines are for accesing from different path and auto  access files from views and public
//and also for accesing post request data
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
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
        id:"1a",
        username:"Bharath",
        content:"hardwork is important to achieve success"
    },
    {
        id:"2b",
        username:"Sai",
        content:"searching gold but got the diamond."
    },
    {
        id:"3c",
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
    let {id,username,content}=req.body;
    posts.push({id,username,content})
    console.log(req.body)
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

//CONCLUSION::THE ABOVE DOESN'T SEE DETAILS FOR NEW POSTS AS WE CAN SEE..!
//for new posts see index2.js then for exact output..
