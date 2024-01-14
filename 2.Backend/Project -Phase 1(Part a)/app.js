const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/model.js");
const path=require("path");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
const port =3000;
const methodOverride=require("method-override");
app.listen(port,(req,res)=>{
    console.log("the port working successfully..!");
})
app.use(methodOverride("_method"));


const url='mongodb://127.0.0.1:27017/wonderplus';
async function Main(){
  await  mongoose.connect(url);
}
Main().then(()=>{
    console.log("Successfully running the server..!")
})
.catch((err)=>{
    console.log(err);
})
//home route
app.get("/",(req,res)=>{
    res.send("Working the server");
})
//INDEX ROUTE
app.get("/listings",async(req,res)=>{
    let listings=await listing.find().sort({_id: -1});
    res.render("listing/index.ejs",{listings});
})

//New route
app.get("/listings/new",(req,res)=>{
    res.render("listing/newListing.ejs");
})

//SHOW ROUTE
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
     let Listing=await listing.findById(id);
     res.render("listing/show.ejs",{Listing});
})

//Create route
app.post("/listings",async (req,res)=>{
    let{title,description,price,location,country}=req.body;
    const newListing=new listing({
        title:title,
        description:description,
        price:price,
        location:location,
        country:country})    
    // const  newListing=new listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//edit route
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let Listing=await listing.findById(id);
    res.render("listing/edit.ejs",{Listing});
})

//update route
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let {title:newTi,description:newDes,country:newCou,location:newLoc,price:newpri}=req.body;
    let update=await listing.findByIdAndUpdate(id,{title:newTi,description:newDes,country:newCou,location:newLoc,price:newpri});
 res.redirect("/listings");
    
})

//Delete Route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    console.log(id);
     let deletes =await listing.findByIdAndDelete(id);
     console.log(deletes);
     res.redirect("/listings")
})

// app.get("/TestListing",async(req,res)=>{
// let sampleList=new listing({
//     title:"This is one of the best ",
//     description:"Its sooo cool place..!",
//     location:"goa",
//     price:1200,
//     country:"India"
// })
// await sampleList.save();
// res.send("working..!");
// console.log("saved successfully");

// })