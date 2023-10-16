let arr=[2,3,4,5,6,7,9];
let even=arr.some((el)=>{
    return el%2==0;
});
console.log(even);

//another
let arr2=[2,4,6,8];
let even2=arr2.some((el)=>{
    return el%2==0;
});
console.log(even2);

let arr3=[2,4,6,8,9,3];
let even3=arr3.some((el)=>{
    return el%2==0;
});
console.log(even3);