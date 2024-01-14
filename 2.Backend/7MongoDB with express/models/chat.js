const mongoose=require("mongoose");

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    },
    date:{
    type:Date
    }
});

const chat=mongoose.model("chat",chatSchema);
module.exports=chat;