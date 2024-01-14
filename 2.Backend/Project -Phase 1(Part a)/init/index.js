const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/model.js");


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

Listing.deleteMany({}).then(()=>{
    console.log("deleted");
});
const initDB=async ()=>{
   await Listing.insertMany(initData);
}
initDB().then(()=>{
    console.log("saved");
})
.catch(()=>{
    console.log("not saved")
})