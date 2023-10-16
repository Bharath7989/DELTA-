// Bharath is Expands. as we can see in the output.
console.log(..."Bharath goud");



// WITH ARRAY LITERALS.
let arr=[3,4,5,6,7,8,9,1];
let newArr=[];
function insert(arr){
    for(let i=0;i<arr.length;i++){
        newArr[i]=arr[i];
    }
    return newArr;
}
console.log(insert(arr));


// INSTEAD OF ABOVE CODE IN SIMPLY WE ARE USING BELOW.
console.log("Instead of above we are using below code.")
let arr2=[6,8,5,3,7,4,9,1];
let newArr2=[...arr2];



// two arrays combining into one array.
let even=[2,4,6,8];
let odd=[1,3,5,7];
let nums=[...even,...odd]; //combining two arrays into single array.
console.log(nums[0]);


// WITH OBJECT LITERALS
let arr4=
    {
    name:"Bharath",
    marks:90,
    };

let arr4Copy={...arr4,city:"Bayyaram"};//here city will be added.