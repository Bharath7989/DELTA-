let arr=[2,3,4,1,5,6,7,9];
let sum=arr.reduce((sum,el)=>(sum+el));
console.log(sum)
// The below code is used for finding the min element from an array.
let min=arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});
console.log(min);


// The below code is used for finding the min element from an array.
let max=arr.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
});
console.log(max);
