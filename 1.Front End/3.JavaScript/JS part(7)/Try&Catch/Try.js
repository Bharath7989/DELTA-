// console.log("hello");
// console.log("hello");
// console.log(a);
// console.log("hey");
// console.log("Baby");



// in the above case error will occured because "a" is not defined.
//then whereever the error is occured then there no later statements will be executed.

console.log("hello");
console.log("hello");
 try{
  console.log(a);
  }catch{
  console.log("The error is occured in a.") ;
  }
console.log("hey");
console.log("Baby");


//if no error will be occured then it automatically prints the value of a and try catch not works if there is no error.
console.log("This is without error try catch")
console.log("hello");
console.log("hello");
let a=5;
 try{
  console.log(a);
  }catch{
  console.log("The error is occured in a.") ;
  }
console.log("hey");
console.log("Baby");
