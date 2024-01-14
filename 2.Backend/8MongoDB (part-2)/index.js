const mongoose = require('mongoose');

async function main() {
 mongoose.connect('mongodb://127.0.0.1:27017/college');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
.then(()=>{
    console.log("successfully running");
})
.catch((err)=>{
    console.log(err)
    console.log("failed to enter");
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    marks:Number
})




const jober=mongoose.model("jober",userSchema);



jober.find().then((res)=>{
    let arrs=res;
    for(arr of arrs){
        console.log("------>",arr.name);
        // console.log(arr.marks);
    }

})
.catch((err)=>{
    console.log(err);
})


