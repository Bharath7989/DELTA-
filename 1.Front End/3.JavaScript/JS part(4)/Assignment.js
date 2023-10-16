//Qs 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
for(let i=0;i<arr.length;i++){
     if(arr[i]==2)    {
        arr.splice(i,1);
     }
}
console.log(arr);

//Qs 2
let num=355634;
count=0;
while(count>0){
    num=num/10;
    count++;
}
console.log(count);

//Qs 4 Factorial of a number
let numb=5;
let fact=1;
 for(i=1;i<=numb;i++){
    fact=fact*i;
 }
 console.log(fact);

//Qs 5 Find the largest number in an array with only positive numbers
let array= [20,49,34,90,56,33,62];
let big=0;
for(let i=0;i<array.length;i++){
    if(array[i]>big){
        big=array[i];
    }
}
console.log(big);

let arrays= [20,49,-34,90,-56,33,62];
let small=0;
for(let i=0;i<arrays.length;i++){
    if(arrays[i]<small){
        small=arrays[i];
    }
}
console.log(small);