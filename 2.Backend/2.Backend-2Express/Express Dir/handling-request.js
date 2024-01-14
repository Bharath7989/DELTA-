const express=require("express");
const app=express();
let port=3000;
// the below one is  the started listening.
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})
// the below one is receiving request.
app.use((req,res)=>{
   console.log("new incoming request");
});
