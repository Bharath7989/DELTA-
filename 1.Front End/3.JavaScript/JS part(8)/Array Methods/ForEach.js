let arr=[2,3,4,5,6,7,9];
console.log("By using Arrow Function");
arr.forEach((el)=>{
    console.log(el);
});
// by using arrow function-2
console.log("by using arrow function-2")
let fun=arr.forEach((el)=>{
    console.log(el);
});


//This is normal function
let func=function(el){
    console.log(el);
}
arr.forEach(func);


// ForEach for Objects.
let arr2=[
    {
    name:"Bharath",
    marks:90,
    },
    {
    name:"RaviTeja",
    marks:80,
    },
     {
    name:"Mahesh",
    marks:70,
    }
];
console.log("Printing student marks.")
arr2.forEach((student)=>{
    console.log(student.marks);
})