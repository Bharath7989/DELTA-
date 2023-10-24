let mul=(a,b)=>a*b;
let sum=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let div=(a,b)=>a/b;

let obj={
    sum:sum,
    mul:mul,
    sub:sub,
    div:div
}
module.exports=obj;

// OR WE CAN DO DIRECTLY AS SHOWN IN BELOW.

// module.exports={
//     sum:sum,
//     mul:mul,
//     sub:sub,
//     div:div
// };