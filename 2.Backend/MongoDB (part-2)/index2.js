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


const employee=mongoose.model("employee",userSchema);

// const emp1=new employee(
//     {
//         name:"sravan",
//         age:20,
//         marks:94,
//     }
// )
// const emp2=new employee(
//     {
//         name:"bharath",
//         age:20,
//         marks:90
//     }
// )
// const emp3=new employee(
//     {
//         name:"teja",
//         age:22,
//         marks:88
//     }
// )
// const emp4=new employee(
//     {
//         name:"sai",
//         age:15,
//         marks:94,
//     }
// )
// const emp5=new employee(
//     {
//         name:"venkat",
//         age:30,
//         marks:70,
//     }
// )

// emp1.save();
// emp2.save();
// emp3.save();
// emp4.save();
// emp5.save();


employee.find().then((res)=>{
    let arrs=res;
    for(arr of arrs){
        console.log("------>",arr.name);
        console.log(arr.marks);
    }

})
.catch((err)=>{
    console.log(err);
})
