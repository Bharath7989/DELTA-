//The below is actually array that we are passing through the function.
// let max;
// function sum(num){
//  max=  num.reduce((max,el)=>{
//     if(max>el){
//         return max;
//     }
//     else{
//         return el;
//     }
//    });
// }
// sum([3,4,51,6,9]);
// console.log(max)


// INSTEAD OF ABOVE WE USE BELOW.
let max;
function sum(...num){
 max=  num.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
   });
}
sum(3,4,51,6,9);
console.log(max);

function gave(...args){
    for(let i=0;i<args.length;i++){
        console.log("You gave me :",args[i]);
    }
}
gave(2,3,4,5,6);
