const mongoose = require('mongoose');
const chat=require("./models/chat.js");

async function Main(){
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
Main().then((res)=>{
console.log("success");
})
.catch((err)=>{
    console.log("failed")
})
let chats=[{
    from:"yash",
    to:"bharath",
    msg:"hello im yash",
    date:new Date()
},
{
    from:"ganesh",
    to:"sai",
    msg:"hello im ganesh",
    date:new Date()
}
]
chat.insertMany(chats);
// chat.save().then((res,err)=>{
// console.log("saved");
// console.log(res);
// })
// .catch((err)=>{
//     console.log("not saved")
// })
