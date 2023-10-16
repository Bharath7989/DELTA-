// Practice Qs 1  either true or false. here true if all inside array elements devide with 10 .
let arr=[10,20,30,40,50,60];
let newarr=arr.every((el)=>{
  return (el%2==0)
});
// console.log(newarr)


// Practice Qs 2 to finding the min in an array.
let arr2=[3,5,2,8,1,9,4,7];
let newarr2=arr2.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
});


