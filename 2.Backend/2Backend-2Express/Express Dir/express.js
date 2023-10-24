const express=require("express");
const app=express();
let port=8080;
// the below one is  the started listening.
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})
