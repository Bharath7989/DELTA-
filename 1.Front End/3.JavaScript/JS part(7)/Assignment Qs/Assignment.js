// Qs 1 Average of array of elements.
let marks=[10,20,30,40,50,60];
 let arrayAverage=()=>{
    let add=0;
  for(let i=0;i<marks.length;i++){
    add+=marks[i];
  }
  return add/marks.length;
}
console.log(arrayAverage(marks));


// Qs 2 Even or Odd
let EvenOdd=()=>{
  if(num%2==0){
    return "Even";
  }
  else{
    return "Odd";
  }
}
let num=5;
console.log(EvenOdd(num));



const object = {
message: 'Hello, World!',
logMessage() {
console.log(this.message);
}
};
setTimeout(object.logMessage, 2000);



let arr=[1,2,3,4,5];
func()=>{
  
}