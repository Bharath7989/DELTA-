let arr=[2,3,4,5,6,7,9];
let double=arr.map((el)=>{
     return el*2;
  });
  console.log(double);

// Or
// but in the below case we are not storing in a variable.
arr.map((el)=>{
    console.log(el*2);
})


// This is Array object.
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
let gpa=arr2.map((gpa)=>{
  return gpa.marks/10;
});
console.log(gpa);