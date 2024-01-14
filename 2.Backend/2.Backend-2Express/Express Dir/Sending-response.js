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
   res.send("hello this is first response....!")
});

//we can send other like: object,html as written below.
// app.use((req,res)=>{
//    console.log("new incoming request");
//    //here sending object.
//    res.send({
//     name:"Bharath",
//     color:"red"
//    });
// });
//here in the below sending html code.
// app.use((req,res)=>{
//    console.log("new incoming request");
//    res.send("<h1>This is heading tag</h1> <i>Bharath</i>");
// });
